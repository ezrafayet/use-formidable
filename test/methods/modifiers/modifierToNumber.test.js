const {modifierToNumber} = require("../../../lib/cjs/useForm/methods/modifiers/modifierToNumber");

test('Test modifierToNumber: "123" is 123"', () => {
  const a = modifierToNumber("123");
  expect(a).toBe(123);
});

test('Test modifierToNumber: 123 is 123"', () => {
  const a = modifierToNumber(123);
  expect(a).toBe(123);
});