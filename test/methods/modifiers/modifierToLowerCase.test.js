const {modifierToLowerCase} = require("../../../lib/cjs/useForm/methods/modifiers/modifierToLowerCase");

test('Test modifierToLowerCase: "george" is "george"', () => {
  const a = modifierToLowerCase("george");
  expect(a).toBe("george");
});

test('Test modifierToLowerCase: "George" is "george"', () => {
  const a = modifierToLowerCase("George");
  expect(a).toBe("george");
});