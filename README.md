# Install Hardhat:
```
npm install --save-dev hardhat
npm install --save-dev @nomiclabs/hardhat-ethers ethers  @nomiclabs/hardhat-waffle ethereum-waffle chai
npm install --save-dev "hardhat@^2.17.0" "@nomicfoundation/hardhat-toolbox@^3.0.0"
```
During this process, cmd will tell you how to install hardhat toolbox therefore you are able to run hardhat scripts.

# Create Project:
`npx hardhat`

# Configuration:
Go to `hardhat.config.js` configure your network.

# Deploy:
Run `npx hardhat run .\scripts\deployMyContract.js --network hardhat` to deploy locally. `--network goerli` to deploy on goerli.

# Interact:
See `interact.js`.
Run `npx hardhat run .\scripts\interact.js --network goerli` to execute.
