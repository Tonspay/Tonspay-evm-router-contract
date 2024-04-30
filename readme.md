# Tonspay evm payment router contract

This repo is to build a simple payment router via EVM chain by solidity . 

More information about why it require a contract to handel payment in evm can be found [here](https://github.com/Tonspay/Tonspay-monitor)

## What this contract do : 

To reord the payment via evm by `event` log . 

**Functions** : 

- `transfer`
    - Methods :
        - to
        - amount
        - id
        - isPrepaid

- `transferErc20` :
    - Methods :
        - to
        - amount
        - id
        - isPrepaid

**Events**  :

- `Pay`
    - Methods : 
        - id
        - from
        - orignFrom
        - to
        - amount 
        - amountFinal
        - amountRouter
        - isPrepaird
        - time

#### Others : 

- Due the terrible fauct of `Goerli` , now using `tbsc` as testnet

```
0x263aD853F020075De3FC1D3e24e9d8E88BcD9182
```
- *Arb* mainnet
```
0x318b6ab1cbC3258a083c77a6FBC9a1215FfdDeA4
```
- *Bsc* mainnet
```
0xab03f37611728B23A6e9Bf89E2C5a5dfAA5b7C4c
```
- *Scroll mainnet*
```
0x318b6ab1cbC3258a083c77a6FBC9a1215FfdDeA4
```
- *Planq mainnet*
```
0xcf62C59f8e653EE9E5C9920575013Bf10C40c586
```