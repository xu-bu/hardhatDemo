require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork:"sepolia",
  networks:{
    hardhat:{},
    sepolia:{
      url:"${GET_IT_FROM_ALCHEMY}",
      accounts:["${PRIVATE_KEY}"],
    },
    goerli:{
      url:"${GET_IT_FROM_ALCHEMY}",
      accounts:["${PRIVATE_KEY}"],
    }
  }
};
