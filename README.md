# swap.pet-new-eth-addr
create new eth addr for eth/ERC20 wallet

## create the project 
```
$ npm init
$ yarn add bip39 ethereum-hdwallet
$ touch index.js
$ vi index.js
```

## create 20 ETH address
```
$ mkdir -p ~/swap.pet
$ cd ~/swap.pet
$ git clone git@github.com:swappet/swap.pet-new-eth-addr.git new-eth-addr
$ cd swap.pet-new-eth-addr
$ npm install
$ node index.js
OR
$ npm run newaddr
```
