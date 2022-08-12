require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");

const PRIVATE_KEY =
  "67b0ab9426df600659cb727c6d33c985bba5e2249015c8f7695f3804b373ed82";
const MUMBAI_NETWORK_URL =
  "https://nd-824-445-707.p2pify.com/efdd571ac4bee5b6317a1a8993eba002";
const POLYGONSCAN_API_KEY = "GMIT7BGBG7Q8R59CTAKEJIPJVDTVA9KHD6";
const BNB_PRIVATE_KEY =
  "88b7e3a9a0654587b15230f34b0f4132e36d40e3f8faa99038f088197431365f";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chaiId: 1337,
    },
    mumbai: {
      url: MUMBAI_NETWORK_URL,
      accounts: [PRIVATE_KEY],
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
      gasPrice: 10000000000,
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [BNB_PRIVATE_KEY],
    },
  },
};
