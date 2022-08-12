import { verifiedByVouch } from '../src/contract/src';

describe('verifiedByVouch', () => {
  it('returns an object of all vouched addresses', async () => {
    const res = await verifiedByVouch();
    console.log("----------------------------------: ", res);
  });
});
