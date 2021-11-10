require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone struggle rebel nominee coast gesture muscle army gas'; 
let testAccounts = [
"0x3fe7ce3d9faf12c0021e88862ed99114318e64e138bdc76e340db572743cc794",
"0x5ef2e5ac6cb2727b9369e80c25a608f97d13dc17e44bdfe8fb577b7084ab044f",
"0x849346047024cbd4e7605a22c7384b7721929b1ae46bf484c2534df7bade0a7a",
"0xb380e271989a4f42b37600f38de97f4e9a8328e5e539c3384cec13c1b4910e62",
"0x80c7f8f15dd3a5ebde3a3b88fcc1d88b5c214ba819f19478b6a87762fcc32d69",
"0x650aba8c8375277b6485b6eb0dc5e898647c5f1afacf8aefc6ac3111c89ecfc9",
"0x388c35db9bf2c791c34f4ef390b63f5324267b0995460badb736f62240fb20b4",
"0xa2380ec78019e9c129d3d04ba8d9c7516036b1214f60fa68662ab7e349ae0a7e",
"0x5ea96e01bea3d585c666710db2b2964347a11f5809f5cc4814eef23017131cb4",
"0x1f002a456cb63ec2ff9b632889f8dfbaea515aed8777fff4b238fe54edc25e9f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


