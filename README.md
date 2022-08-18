### VouchDAO

VouchDAO is for verifying Arweave addresses using the <a href="https://github.com/ArweaveTeam/arweave-standards/blob/ans-109/ans/ANS-109.md">ans-109</a> standard.

### How to use
Add the dependencies<br/>
`npm i vouchdao`<br/>

or</br>

`yarn add vouchdao`

### Import the functions

```js
import { isVouched, isVouchedBy } from 'vouchdao'
```

### Calling functions

`isVouched` will check if an Arweave address is vouched by ANY service.

```js
await isVouched("ARWEAVE_ADDRESS")
```
<hr/>

`isVouchedBy` will check if an Arweave address is vouched by a particular service.

```js
await isVouchedBy("ARWEAVE_ADDRESS", "VERIFICATION_SERVICE_NAME")
```

return value is true or false.
