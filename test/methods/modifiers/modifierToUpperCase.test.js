const {modifierToUpperCase} = require("../../../lib/cjs/useForm/methods/modifiers/modifierToUpperCase");

test('Test modifierToUpperCase: "abc" is ABC"', () => {
  const a = modifierToUpperCase("abc");
  expect(a).toBe("ABC");
});

test('Test modifierToUpperCase: "ABC" is ABC"', () => {
  const a = modifierToUpperCase("ABC");
  expect(a).toBe("ABC");
});