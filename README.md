# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
Attach Smart Contract to console
```
const contextTest = await ( await ethers.getContractFactory('ContextTest')).attach("0x5FbDB2315678afecb367f032d93F642f64180aa3")
```