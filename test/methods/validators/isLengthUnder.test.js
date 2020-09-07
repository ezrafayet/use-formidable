const {isLengthUnder} = require("../../../lib/cjs/useForm/methods/validators/isLengthUnder");

test('abc < 5 is true', () => {
  const a = isLengthUnder("abc", 5);
  expect(a).toBe(true);
});

test('abc < 2 is false', () => {
  const a = isLengthUnder("abc", 2);
  expect(a).toBe(false);
});

test('abc < 3 is true', () => {
  const a = isLengthUnder("abc", 3);
  expect(a).toBe(true);
});