const {modifierCapitalize} = require("../../../lib/cjs/useForm/methods/modifiers/modifierCapitalize");

test('Test modifierCapitalize: "george" is "George"', () => {
  const a = modifierCapitalize("george");
  expect(a).toBe("George");
});

test('Test modifierCapitalize: "GEORGE" is "George"', () => {
  const a = modifierCapitalize("GEORGE");
  expect(a).toBe("George");
});