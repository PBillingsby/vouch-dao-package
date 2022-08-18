### VouchDAO

VouchDAO is for verifying Arweave addresses using the <a href="https://github.com/ArweaveTeam/arweave-standards/blob/ans-109/ans/ANS-109.md">ans-109</a> standard.

### How to use

`npm i vouchdao`
or
`yarn add vouchdao`

```js
import { isVouched, isVouchedBy } from 'vouchdao'
```

`isVouched` will check if an Arweave address is vouched by ANY service.

`isVouchedBy` will check if an Arweave address is vouched by a particular service.

```js
await isVouched("ARWEAVE_ADDRESS")
```

```js
await isVouchedBy("ARWEAVE_ADDRESS", "VERIFICATION_SERVICE_NAME")
```

return value is true or false.
