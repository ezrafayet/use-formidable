const {modifierToKeepNumbers} = require("../../../lib/cjs/useForm/methods/modifiers/modifierToKeepNumbers");

test('Test modifierToKeepNumbers: "george" is ""', () => {
  const a = modifierToKeepNumbers("george");
  expect(a).toBe("");
});

test('Test modifierToKeepNumbers: "555" is "555"', () => {
  const a = modifierToKeepNumbers("555");
  expect(a).toBe("555");
});

test('Test modifierToKeepNumbers: "55Ai2" is "552"', () => {
  const a = modifierToKeepNumbers("55Ai2");
  expect(a).toBe("552");
});