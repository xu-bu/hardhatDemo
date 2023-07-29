# Install Hardhat:
```
npm install --save-dev hardhat
npm install --save-dev @nomiclabs/hardhat-ethers ethers  @nomiclabs/hardhat-waffle ethereum-waffle chai
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

# Create Project:
`npx hardhat`

# Configuration:
Go to `hardhat.config.js` configure your network.

# Deploy:
Run `npx hardhat run .\scripts\deployMyContract.js --network hardhat` to deploy locally. `--network goerli` to deploy on goerli.
