const fs = require("fs");
const path = require("path");
const { ethers } = require("hardhat");

var jsonData;

function parseJSON() {
  // 注意不要用代码编辑器的自动提示，因为相对路径的根目录是本项目，所以./下面就有artifacts
  const filePath = "./artifacts/contracts/myContract.sol/GoerliNFT.json";
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("读取abi文件出错：", err);
      return;
    }

    try {
      // 解析 JSON 文件内容为 JavaScript 对象
      return JSON.parse(data);
    } catch (error) {
      console.error("解析abi JSON 出错：", error);
    }
  });
  return -1
}

async function main() {
  const contractAddress = "0xA92C0f7Ef1618239665ae582377fc49f17af925E";
  const myContractFactory = await ethers.getContractFactory("GoerliNFT");
  const myContract=myContractFactory.attach(contractAddress);
  let res=await myContract.balanceOf("0x52906abb6B9d358eEF7D903cf1ecb521643297f4");
  console.log(res)
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
