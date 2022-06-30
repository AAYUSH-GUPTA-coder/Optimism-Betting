const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });


async function main() {
  
  const Contract = await ethers.getContractFactory("Casino");

  // deploy the contract
  const deployedVerifyContract = await Contract.deploy();

  await deployedVerifyContract.deployed();

  // print the address of the deployed contract
  console.log("Contract Address:", deployedVerifyContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
