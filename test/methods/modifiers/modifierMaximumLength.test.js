const {modifierMaximumLength} = require("../../../lib/cjs/useForm/methods/modifiers/modifierMaximumLength");

test('Test modifierMaximumLength: "geo" is "geo if cut at 6"', () => {
  const a = modifierMaximumLength("geo", 6);
  expect(a).toBe("geo");
});

test('Test modifierMaximumLength: "george" is "George" if cut at 6', () => {
  const a = modifierMaximumLength("george", 6);
  expect(a).toBe("george");
});

test('Test modifierMaximumLength: "george" is "geo" if cut at 3', () => {
  const a = modifierMaximumLength("george", 3);
  expect(a).toBe("geo");
});