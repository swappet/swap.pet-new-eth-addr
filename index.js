const bip39 = require('bip39')
const HDWallet = require('ethereum-hdwallet')

const mnemonic = bip39.generateMnemonic()

// const mnemonic = ""

console.log(mnemonic)

async function getAddress(mnemonic) {
    const addNum = 20 
    const seed = await bip39.mnemonicToSeed(mnemonic)
    const hdwallet = HDWallet.fromSeed(seed) 
    for (var i = 0; i < addNum; i++) { 
        const key = hdwallet.derive("m/44'/60'/0'/0/"+i) // set path
        console.log("==========ETH Address "+(i+1)+" ===========")
        console.log("Pri:"+key.getPrivateKey().toString('hex'))
        console.log("Pub:"+key.getPublicKey().toString('hex'))
        const EthAddress = '0x'+key.getAddress().toString('hex')
        console.log("ETH:"+EthAddress)
    }
}

getAddress(mnemonic)
