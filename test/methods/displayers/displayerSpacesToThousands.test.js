const {displayerSpacesToThousands} = require("../../../lib/cjs/useForm/methods/displayers/displayerSpacesToThousands");

test('Test displayerSpacesToThousands: 12 is "12"', () => {
    const a = displayerSpacesToThousands(12);
    expect(a).toBe("12");
});

test('Test displayerSpacesToThousands: "12" is "12"', () => {
  const a = displayerSpacesToThousands("12");
  expect(a).toBe("12");
});

test('Test displayerSpacesToThousands: 123 is "123"', () => {
  const a = displayerSpacesToThousands(123);
  expect(a).toBe("123");
});

test('Test displayerSpacesToThousands: 1234 is "1 234"', () => {
  const a = displayerSpacesToThousands(1234);
  expect(a).toBe("1 234");
});

test('Test displayerSpacesToThousands: 1234567890 is "1 234 567 890"', () => {
  const a = displayerSpacesToThousands(1234567890);
  expect(a).toBe("1 234 567 890");
});

test('Test displayerSpacesToThousands: 1234.567890 is "1 234.567890"', () => {
  const a = displayerSpacesToThousands(1234.567890);
  expect(a).toBe("1 234.56789");
});