require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");

const PRIVATE_KEY =
  "67b0ab9426df600659cb727c6d33c985bba5e2249015c8f7695f3804b373ed82";
const MUMBAI_NETWORK_URL =
  "https://nd-824-445-707.p2pify.com/efdd571ac4bee5b6317a1a8993eba002";
const POLYGONSCAN_API_KEY = "GMIT7BGBG7Q8R59CTAKEJIPJVDTVA9KHD6";

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
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
};
