const hre = require("hardhat");

async function main() {
  const contextTest = await hre.ethers.getContractFactory("ContextTest");
  const contextTestContract = await contextTest.deploy();
  await contextTestContract.deployed();
  console.log("ContextTest deployed to:", contextTestContract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
