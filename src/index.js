import { WarpFactory } from 'warp-contracts'

const warp = WarpFactory.forMainnet();

const contract = warp.contract("_z0ch80z_daDUFqC9jHjfOL8nekJcok4ZRkE_UesYsk").connect("use_wallet").setEvaluationOptions({
  allowBigInt: true
});

const isVouched = async (address) => {
  const { cachedValue } = await contract.readState();
  return cachedValue.state.vouched[address]
}

export default isVouched;


