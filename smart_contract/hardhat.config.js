//https://eth-goerli.g.alchemy.com/v2/DHjGgX5bsf07keiyn7d-rVyPgItKCSjY

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/DHjGgX5bsf07keiyn7d-rVyPgItKCSjY",
      accounts: ['d0cb6acaaee05c8eabe273c4ca93416c92eb5efb3983ca4cfbb80cc24d4bd8d4']
    }
  }
}

//deployed to 0xFaa3CE4caa280CBa3c2d7a7e22149830F9FDdF71