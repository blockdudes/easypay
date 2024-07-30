import 'dotenv/config'
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
// const config: HardhatUserConfig = {
//   solidity: "0.8.24",
//   networks: {
//     arb_sepolia: {
//       url: `https://arb-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
//       accounts: [PRIVATE_KEY],
//     },
//   },
//   etherscan: {
//     apiKey: {
//       sepolia: ETHERSCAN_API_KEY,
//     },
//   },
// };

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    arb_sepolia: {
      url: `https://endpoints.omniatech.io/v1/arbitrum/sepolia/public`,
      accounts: ["49c9a17b9e705a0749cd2a0d358bec619a6e056e343c4d10c4619b93a83b9369"],
    },
    sepolia: {
      url: `https://ethereum-sepolia-rpc.publicnode.com`,
      accounts: ["49c9a17b9e705a0749cd2a0d358bec619a6e056e343c4d10c4619b93a83b9369"],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "https://api-sepolia.etherscan.io/api",
    },
  },
};

export default config;