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
0x4d978743B36B7F8A72B8C2CD77DD24B33D9E2D9b
```