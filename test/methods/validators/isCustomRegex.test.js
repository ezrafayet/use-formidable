const {isCustomRegex} = require("../../../lib/cjs/useForm/methods/validators/isCustomRegex");

test('---', () => {
  const a = isCustomRegex("hello", /hello/);
  expect(a).toBe(true);
});

test('---', () => {
  const a = isCustomRegex("hello world", /hello/);
  expect(a).toBe(true);
});

test('---', () => {
  const a = isCustomRegex("Good bye", /hello/);
  expect(a).toBe(false);
});