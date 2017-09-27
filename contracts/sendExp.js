#!/usr/bin/env node
const fs = require('fs');
const Web3 = require('web3');
const Tx = require('ethereumjs-tx');

const web3 = new Web3(new Web3.providers.HttpProvider("http://moon.pixels.camp:8545"));

const abi = JSON.parse(fs.readFileSync('./build/HumanStandardToken.abi'));
const address = "0x0ce335bb2d04595c84e3d444675360f64de386e8";  // contract address

const privateKey = new Buffer('...', 'hex');  // private key of the account from where to send
const fromAddress = '...'  // from account

const toAddress = '0x48e6f88f863c3178f470d92f799c6959fe98e2fe' // destination account

console.log('Creating contract object');
const contract = web3.eth.contract(abi);

var contractInstance = contract.at(address);

var txData = contractInstance.transfer.getData(toAddress, 1)

const gasPrice = web3.eth.gasPrice;
const gasPriceHex = web3.toHex(gasPrice);
const gasLimitHex = web3.toHex(4500000);

console.log('Get nonce');
const nonce = web3.eth.getTransactionCount(fromAddress);
const nonceHex = web3.toHex(nonce);

const rawTx = {
    nonce: nonceHex,
    gasPrice: gasPriceHex,
    gasLimit: gasLimitHex,
    data: txData,
    from: fromAddress,
    to: address
};

console.log(rawTx);

// sign the transaction

const tx = new Tx(rawTx);
console.log('Signing transaction');
tx.sign(privateKey);
console.log('Serializing transaction');
const serializedTx = tx.serialize();

// send the transaction - aka deploy the contract
console.log('Sending transaction');
web3.eth.sendRawTransaction("0x" + serializedTx.toString('hex'), (err, hash) => {
    if (err) { console.log(err); return; }

    // Log the tx, you can explore status manually with eth.getTransaction()
    console.log('created tx: ' + hash);

    // Wait for the transaction to be mined
    waitForTransactionReceipt(hash);
});


function waitForTransactionReceipt(hash) {
    console.log('waiting for tx to be mined');
    const receipt = web3.eth.getTransactionReceipt(hash);
    // If no receipt, try again in 1s
    if (receipt == null) {
        setTimeout(() => {
            waitForTransactionReceipt(hash);
        }, 1000);
    } else {
        // The transaction was mined, we can retrieve the contract address
        console.log('contract address: ' + receipt.contractAddress);
    }
}

