### VouchDAO
VouchDAO is for verifying Arweave addresses using the <a href="https://github.com/ArweaveTeam/arweave-standards/blob/ans-109/ans/ANS-109.md">ans-109</a> standard.

### How to use
`npm i vouchdao`
or
`yarn add vouchdao`

`import { isVouched } from 'vouchdao'`

`await isVouched("ARWEAVE_ADDRESS")`

return value is true or false.