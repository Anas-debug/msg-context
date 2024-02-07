const hre = require("hardhat");

async function main() {

  const ContextTest = await hre.ethers.getContractFactory("ContextTest");
  const contextTest = await ContextTest.deploy();
  console.log(contextTest);
  console.log("Contract deployed to:", contextTest.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode =   1;
});