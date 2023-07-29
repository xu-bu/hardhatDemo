const { ethers } = require("hardhat");

async function main() {
  const contractFactory = await ethers.getContractFactory("GoerliNFT")
  const myContract = await contractFactory.deploy()
  console.log("deploy successfully, address:", myContract.address)
  const value=await myContract.getMessage()
  console.log(value)
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
