## Using Metamask with Pixels Camp

MetaMask allows you to run Ethereum dApps right in your browser without running a full Ethereum node. It includes a secure identity vault, providing a user interface to manage your identities on different sites and sign blockchain transactions.

Click [here][5] to install the extension in Chrome.

Once installed, open MetaMask and create a new vault. By default, the vault will be connected to the Ropsten Test Network.

Now click on the top left as it shows in the image and then choose `Custom RPC`.

![add custom tesnet](img/add-testnet.png)

Now add `http://moon.pixels.camp:8545` to the RPC address field.

![add custom tesnet](img/add-rpc.png)

That's it. You're now connected to our testnet, and you have your own Ethereum address.

## Get some Ether

To get 1000 free ethers, you need to update your Pixels Camp user profile.

First open Metamask again, and copy your public Ethereum address to the clipboard.

![copy address](img/copy-address.png)

Now login to your [Pixels Camp account][7] and edit your profile. You'll find a "Moon Wallet" field. Copy your ethereum address and press enter.

![copy address](img/profile.png)

Go back to Metamask and watch. In 1-2 minutes your wallet will show that you own 1000 ethers.

You're ready.

## Questions?

Use [Slack][8], channel `#blockchain`. We'll be around.

Back to [Exposure][README.md]

[1]: https://ethereum.org/
[2]: https://ethereum.org/ether
[3]: http://consensys.github.io/developers/articles/101-noob-intro/
[4]: https://github.com/ethereum/go-ethereum/wiki/Contract-Tutorial
[5]: https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn
[6]: https://metamask.io/
[7]: https://pixels.camp/
[8]: https://github.com/PixelsCamp/docs/blob/master/SLACK.md
[9]: http://moon.pixels.camp:8547/
[10]: https://github.com/gobitfly/etherchain-light
