const fs = require("fs");
const path = require("path");

// 读取 data.json 文件
const filePath = "./artifacts/contracts/myContract.sol/GoerliNFT.json";

fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      console.error("文件不具有读取权限或不存在：", err);
    } else {
      console.log("文件具有读取权限。");
    }
  });

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("读取文件出错：", err);
    return;
  }

  try {
    // 解析 JSON 文件内容为 JavaScript 对象
    const jsonData = JSON.parse(data);

    // 处理 jsonData，例如输出内容
    console.log(jsonData.abi);
  } catch (error) {
    console.error("解析 JSON 出错：", error);
  }
});
