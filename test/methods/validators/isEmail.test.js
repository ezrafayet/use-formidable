const {isEmail} = require("../../../lib/cjs/useForm/methods/validators/isEmail");

test('abc false', () => {
  const a = isEmail("abc");
  expect(a).toBe(false);
});

test('abc@ false', () => {
  const a = isEmail("abc@");
  expect(a).toBe(false);
});

test('abc@aaa false', () => {
  const a = isEmail("abc@aaa");
  expect(a).toBe(false);
});

test('abc@aaa.bc true', () => {
  const a = isEmail("abc@aaa.bc");
  expect(a).toBe(true);
});