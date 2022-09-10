require("@nomiclabs/hardhat-waffle")
require("hardhat-deploy")
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan")
require("ethers")
require('dotenv').config()



module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: { },
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC
      },
      saveDeployments: true
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  solidity: "0.8.9",
  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};
