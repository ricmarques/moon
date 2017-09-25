#!/usr/bin/env node
const fs = require('fs');
const Web3 = require('web3');
const Tx = require('ethereumjs-tx')

/*

   Two articles worth reading:

     - http://hypernephelist.com/2016/12/13/compile-deploy-ethereum-smart-contract-web3-solc.html
     - http://hypernephelist.com/2017/01/19/deploy-ethereum-smart-contract-using-client-signature.html

*/


const web3 = new Web3(new Web3.providers.HttpProvider("http://moon.pixels.camp:8545"));

const code = fs.readFileSync('./build/HumanStandardToken.bin').toString();
const abi = JSON.parse(fs.readFileSync('./build/HumanStandardToken.abi'));

/*
for(var i in abi) {
    console.log(abi[i].name);
    console.log(abi[i].inputs);
    console.log("\n");
}
*/

var privateKey = new Buffer('...');

// Contract object

console.log('Creating contract object');
const contract = web3.eth.contract(abi);

const contractData = contract.new.getData(1234567890, 'Teste', '2', 'TST', {
    data: '0x' + code
});

eth.pendingTransactions


const gasPrice = web3.eth.gasPrice;
const gasPriceHex = web3.toHex(gasPrice);
const gasLimitHex = web3.toHex(4500000);

console.log("Coinbase is "+web3.eth.coinbase);

console.log('Get nonce');
const nonce = web3.eth.getTransactionCount(web3.eth.coinbase);
const nonceHex = web3.toHex(nonce);

const rawTx = {
    nonce: nonceHex,
    gasPrice: gasPriceHex,
    gasLimit: gasLimitHex,
    data: contractData,
    from: web3.eth.coinbase
};

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
    console.log('contract creation tx: ' + hash);

    // Wait for the transaction to be mined
    waitForTransactionReceipt(hash);
});


function waitForTransactionReceipt(hash) {
    console.log('waiting for contract to be mined');
    const receipt = web3.eth.getTransactionReceipt(hash);
    // If no receipt, try again in 1s
    if (receipt == null) {
        setTimeout(() => {
            waitForTransactionReceipt(hash);
        }, 1000);
    } else {
        // The transaction was mined, we can retrieve the contract address
        console.log('contract address: ' + receipt.contractAddress);
        //testContract(receipt.contractAddress);
    }
}



/*

// Deploy contract instance
const contractInstance = contract.new(
    100000000, // 100M tokens minted at birth
    'Exposure',
    '0',
    'EXP',
    {
        data: '0x' + code,
        from: web3.eth.coinbase,
        gas: 90000*2
    }
    , (err, res) => {
        if (err) {
            console.log(err);
            return;
        }

        // Log the tx, you can explore status with eth.getTransaction()
        console.log(res.transactionHash);

        // If we have an address property, the contract was deployed
        if (res.address) {
            console.log('Contract address: ' + res.address);
// Let's test the deployed contract
            testContract(res.address);
        }
    });

*/
