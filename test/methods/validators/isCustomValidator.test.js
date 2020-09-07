const {isCustomValidator} = require("../../../lib/cjs/useForm/methods/validators/isCustomValidator");

test('---', () => {
  const a = isCustomValidator("abc", (value) => {return value === "abc"});
  expect(a).toBe(true);
});

test('---', () => {
  const a = isCustomValidator("abc", (value) => {return value === "abcd"});
  expect(a).toBe(false);
});