import hre from "hardhat";
import { getTokenList } from "src/getTokenList";

// Figure out which addresses.json to use based on the network that hardhat was
// called with at the command line, eg: "mainnet" or "goerli" for now.
const network = hre.network.name == "hardhat" ? "mainnet" : hre.network.name;
const addressesJson = require(`src/addresses/${network}.addresses.json`);

getTokenList(
  addressesJson,
  `${network} token list`,
  `dist/${network}.tokenlist.json`
)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
