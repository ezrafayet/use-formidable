const {isLengthAbove} = require("../../../lib/cjs/useForm/methods/validators/isLengthAbove");

test('abc > 5 is false', () => {
  const a = isLengthAbove("abc", 5);
  expect(a).toBe(false);
});

test('abc > 3 is true', () => {
  const a = isLengthAbove("abc", 3);
  expect(a).toBe(true);
});

test('abc > 2 is true', () => {
  const a = isLengthAbove("abc", 2);
  expect(a).toBe(true);
});