require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift reflect saddle erosion inner enter metal gate'; 
let testAccounts = [
"0x32544a711cc84b6db262e2391cdb848e937d38aed419c34b2ac8a9acd544a175",
"0x0d8ea5131f353487ffc66b0810e094bff520d56672385fa072836822deea2323",
"0x4cdb33c9d12eea6c909d359f286d2be8bcf784d7c6af99aeebb3c5e23490e0d8",
"0x876c0c922cb3020c7affcdd656755ea6beb8d5628d3cfa0927a36bbe90e94a54",
"0x533a5f1faa1e8e194e77a34ae43fbb310b47d24315b867d25b8a53178678b840",
"0x9bf787ddc4590857ea23d73989e26d28606d1e887d39b5ef36e2350aeec93400",
"0xeb7def86cf855733d005d31e1fe306c3092a55c1ecf543aa43a70963c9531f9e",
"0x8f772fb1d59126814e9de533adc63dbf0f2db2c6255d0a7e33973d4d7bb7dc30",
"0x786f1755c60dfb49c71325116a93a806ab70eb405d64c348ab54602f29c6c7f4",
"0x305a077e130716d444d98b2823af37086facf1972c45b4a36321f2e8606c2611"
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


