import { isVouched, isVouchedBy } from '../src';

describe('isVouched', () => {
  it('returns true for verified address', async () => {
    const res = await isVouched("UZ1YsJa8yJrw8yynYzhaAikqD1uuMu9gi9u7Ia_Eja8")
    expect(res).toEqual(true)
  });
  it('returns false for unverified address', async () => {
    const res = await isVouched("_JiUqSPY2y8jpoDM4b56iD5embeJph0y_oIexbCEA5Q")
    expect(res).toEqual(false)
  });
});


describe('isVouchedBy', () => {
  it('returns true for Twitter verified address', async () => {
    const res = await isVouchedBy("UZ1YsJa8yJrw8yynYzhaAikqD1uuMu9gi9u7Ia_Eja8", "twitter")
    expect(res).toEqual(true)
  });
  it('returns false for non Twitter verified address', async () => {
    const res = await isVouchedBy("_JiUqSPY2y8jpoDM4b56iD5embeJph0y_oIexbCEA5Q", "twitter")
    expect(res).toEqual(false)
  });
  it('returns error if no service passed in', async () => {
    const res = await isVouchedBy("UZ1YsJa8yJrw8yynYzhaAikqD1uuMu9gi9u7Ia_Eja8", "")
    expect(res).toEqual(new Error("Must provide a valid service"))
  });
});
