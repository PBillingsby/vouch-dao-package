### VouchDAO
VouchDAO is for verifying Arweave addresses using the <a href="https://github.com/ArweaveTeam/arweave-standards/blob/ans-109/ans/ANS-109.md">ans-109</a> standard.<br/>
This package consists of functions that query the Arweave network and returns boolean values based on if a User has a verified address.

### How to use
`npm i vouchdao`<br/>

or</br>

`yarn add vouchdao`

### Import the functions

```js
import { isVouched } from 'vouchdao'
```

### Calling function

`isVouched` will check if an Arweave address is vouched by ANY service.

```js
await isVouched("ARWEAVE_ADDRESS")
```
return value is true or false.
<hr/>
