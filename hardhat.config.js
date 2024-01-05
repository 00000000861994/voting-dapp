/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "Goerli",
   networks: {
      hardhat: {},
      Goerli: {
         url: API_URL,
         accounts: [`0xc5e742eb1b151a01b064fdafc6d9794b118081daeb2dadf9018377eb5d6d865d`],
         gas: 210000000,
         gasPrice: 800000000000,
      }
   },
}