import { isVouched } from '../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('returns true for verified address', async () => {
  const res = await isVouched('UZ1YsJa8yJrw8yynYzhaAikqD1uuMu9gi9u7Ia_Eja8');
  const obj = Object.keys(res).length;
  console.log(obj);
  assert.is.not(obj, obj === 0);
});

test('returns false for unverified address', async () => {
  const res = await isVouched('_JiUqSPY2y8jpoDM4b56iD5embeJph0y_oIexbCEA5Q');
  assert.is(res, undefined);
});

test.run();
