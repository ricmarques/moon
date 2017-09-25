# Exposure

Exposure is an [Ethereum ERC20][1] token specifically created for the Pixels Camp participants. Its primary purpose is to help developers get familiarized with the Ethereum Blockchain technology and to foster experimentation of new ideas and applications on top of it.

Our digital coin can be used with many activities around the Pixels Camp event and community, including investing in the hackathon projects, essencially substituting the voting system, or buying services. You can see a list of uses below. Our goal is to simulate a real life market and a [Nash equilibrium][20] using the Blockchain as the underlying decentralized and transparent platform.

The symbol for Exposure is EXP.

EXP runs on our Ethereum Testnet and is ruled by a smart contract at the address `0x0ce335bb2d04595c84e3d444675360f64de386e8`.

You can interact and inspect the contract [here][8], and sources are [here][9].

The name was inspired by the famous [You're doing it for the exposure][2] cartoon from The Oatmeal.

[![screenshot](imgs/exposure.png)][13]

If don't know The Oatmeal, then you're missing out. Go ahead and support [Matthew Inman][16]'s work, check the [comics][15] and the [shop][14].

## Inital setup

To start using EXP, first, you need to get yourself a wallet. In Ethereum, or most blockchains, the simplest form of a wallet is a public address, which you use to send money/tokens/data to, and a private key, which you should store securely in place no one can access.

Some wallet applications will use passwords or mnemonics to make things easier for you, but that's just convenience. Deep inside their guts, all they're doing is managing your private key to sign transactions for you.

Two things you need to know:

 * The private key generates your public address.
 * Anyone with your private key can access your wallet and steal your money or tokens, and there's nothing you can do about it.

### Creating the wallet

There are many ways to create a wallet, and we're pretty sure that soon you'll be digging into command line python or nodejs code to manage this task, but for the time being, let's keep it simple. Here are two methods, GUI based to create your wallet:

 * Create wallet using the [Pixels Camp Wallet][10] (recommended)
 * Create wallet using the [Metamask][11] Chrome Extension

## Earning EXP tokens

There are 5 ways to earn EXP tokens in your account.

 1. By participating and earning [badges][17]. For each badge you earn, you get EXPs. Each badge equals to 100 EXPs, but some badges are worth more (ex: the quiz show winners).
 1. By convincing other participants to send you their EXPs. We don't interfere here.
 1. By selling a service in the marketplace by which participants pay you for (same as above, basically).
 1. By investing in a winning project.
 1. By solving a very special scavenger hunt we setup for you, and accessing a wealthy pot of EXP. You'll be an EXP whale.

Just remember that in order to earn tokens, first you must setup your account/wallet and then you must put your public address in your profile page. **If you don't do this, then you're out of the market**.

## Spending EXP tokens

You can spend your EXP tokens with:

 1. [Offering them][18] to other participants.
 1. Investing in the hackathon [projects][19] you like the most.
 1. Buying services from the market.

[1]: https://theethereum.wiki/w/index.php/ERC20_Token_Standard
[2]: http://theoatmeal.com/comics/exposure
[3]: https://ens.domains/
[4]: https://pixels.camp/campfire/
[5]: https://github.com/ethereum/web3.js
[6]: https://metamask.io/
[7]: https://github.com/ethereum/mist
[8]: https://wallet.pixels.camp/#contracts
[9]: https://github.com/PixelsCamp/moon/tree/master/contracts
[10]: MEW.md
[11]: METAMASK.md
[13]: http://theoatmeal.com/comics/exposure
[14]: https://shop.theoatmeal.com/
[15]: https://theoatmeal.com/
[16]: https://en.wikipedia.org/wiki/The_Oatmeal
[17]: https://pixels.camp/badges/
[18]: https://github.com/PixelsCamp/moon/blob/master/MEW.md#sending-exp-tokens-to-someone-else
[19]: https://pixels.camp/projects/
[20]: https://en.wikipedia.org/wiki/Nash_equilibrium
