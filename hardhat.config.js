require("@nomiclabs/hardhat-waffle")
require("hardhat-deploy")
require("@nomiclabs/hardhat-ethers")
require("ethers")


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: { },
  },
  solidity: "0.8.9",
  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};
