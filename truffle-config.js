const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config()
const { MNEMONIC, INFURA_API_KEY } = process.env;

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },

    ropsten: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        //  Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
      networkCheckTimeout: 1000000000
    },
  },

  compilers: {
    solc: {
      version: "0.8.9",
    }
  },
};
