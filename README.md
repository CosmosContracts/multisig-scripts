# Core-1 Legacy multisig

This multisig account had been sunsetted as per governance proposal https://www.mintscan.io/juno/proposals/319 


## Pubkeys

In case you need to recreate it for any reason


```
junod keys add jake --pubkey '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A+hZFIZ3i+5jD83trhShTmD/bAAXpIyb6tHJDJtiOAn6"}'
junod keys add block --pubkey '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Akr1IlYcH7p08W8pdYNkmAEvDRoPOXdOefg56cm3paKm"}'
junod keys add wolf --pubkey '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A5fjV581bOBJSuHpBkY7ve3uZJFAv4JI14+K+RiHgr30"}'
junod keys add dimi --pubkey '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"ApcEus7fRKwSRNNs4nlOy62fFH9Ep7lg9DQRsnx9Ht0H"}'
junod keys add jack --pubkey '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A1SgSrlikj83agLUJPYDuWTjPkw4rPzkWgMMy/5RxANy"}'
junod keys add core1-multi --multisig jake,dimi,jack,block,wolf --multisig-threshold 3
```

