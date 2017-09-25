# Exposure Smart Contract

These are the source files for the [ERC20][4] Exposure (EXP) smart contract.

We based EXP on the well tested [Consensys example][5] contracts.

## Install software

The first thing you need to do is [install Solidity][2], a contract-oriented, high-level language whose syntax is similar to that of JavaScript, used to develop Ethereum smart contracts.

These are the instructions to install solc on a Mac, but you can do it with [other platforms][2] too.

```
brew update
brew upgrade
brew tap ethereum/ethereum
brew install solidity
brew linkapps solidity
```

A few notes:

* boost, one of the dependencies takes ages to compile, even on fast machines. It's normal.

We're assuming you have a recent version of [Node][7] and [yarn][3] installed. They are script for these scripts to tun.

## Build the Exposure Smart Contract

To install depencies run:

```
yarn install
```

To build this smart contract run:

```
yarn build
```

This will both create the [Application Binary Interface][6] (ABI) files and the binaries in *./build/*.

## Deploying the contract

### Using NodeJS

WIP

### Using Metamask

 * Open Metamask and unlock the wallet that you wish to own the deployed contract (you can change the ownsership later)
 * Open the Javascript console and type:

```
abi = <content from ./build/HumanStandardToken.abi>
code = "<content from ./build/HumanStandardToken.bin>"
contract = web3.eth.contract(abi);
contract.new(100000000, 'Exposure', '0', 'EXP', {"from": web3.eth.accounts[0], "gas": 4000000, "data": code}, function(e,j){console.log(e,j)});
```

This will deploy the contract and mint 100,000,000 EXP tokens.

 * A Metamask popup will appear, asking to accept the transaction. Do it.
 * Now wait from the transactionHash and the contract addresss. This may take a few seconds, depending on the test mining speed.
 * If the contract address doesn't show up, you can inspect the transactionHash here: https://wallet.pixels.camp/#check-tx-status

![Speaker Image](https://github.com/PixelsCamp/talks/blob/master/img/ricardo_paiagua.jpg?raw=true)

Your contract is now ready to use.

[1]: https://github.com/ConsenSys/Tokens
[2]: http://solidity.readthedocs.io/en/develop/installing-solidity.html
[3]: https://yarnpkg.com/en/docs/install
[4]: https://github.com/ethereum/EIPs/issues/20
[5]: https://github.com/ConsenSys/Tokens
[6]: https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI
[7]: https://nodejs.org/en/
