const {modifierCustom} = require("../../../lib/cjs/useForm/methods/modifiers/modifierCustom");

test('Test modifierCustom: ---', () => {
  const a = modifierCustom("abc", (value) => {return value.toUpperCase()});
  expect(a).toBe("ABC");
});