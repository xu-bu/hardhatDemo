const { ethers } = require("hardhat");

async function main() {
  const contractFactory = await ethers.getContractFactory("myContract")
  const myContract = await contractFactory.deploy("test")
  console.log("deploy successfully, address:", myContract.address)
  const value=await myContract.getMessage()
  console.log(value)
  const res=await myContract.updateMessage("A new message")
  await res.wait(1)
  const newValue=await myContract.getMessage()
  console.log(newValue)
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
