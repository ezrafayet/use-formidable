const {useFormReducer} = require("../../lib/cjs/useForm/reducer/useFormReducer");

test('Resets form values', () => {

  const initialForm = {
    a: "A",
    b: {
      c: "C",
      d: "D",
    }
  };

  const state = {
    x: "X",
    y: {
      z: "Z",
    }
  };

  const a = useFormReducer(initialForm)(state, {
    actionType: "reset",
    key: "",
    value: "",
  });

  expect(a.a).toBe("A");
  expect(a.b.c).toBe("C");
  expect(a.b.d).toBe("D");
});

test('Updates not nested value', () => {

  const initialForm = {
    a: "A",
    b: {
      c: "C",
      d: "D",
    }
  };

  const state = {...initialForm};

  const a = useFormReducer(initialForm)(state, {
    actionType: "update",
    key: "a",
    value: "J",
  });

  expect(a.a).toBe("J");
  expect(a.b.c).toBe("C");
  expect(a.b.d).toBe("D");
});


test('Updates nested value, 1 level', () => {

  const initialForm = {
    a: "A",
    b: {
      c: "C",
      d: "D",
    }
  };

  const state = {...initialForm};

  const a = useFormReducer(initialForm)(state, {
    actionType: "update",
    key: "b.c",
    value: "J",
  });

  expect(a.a).toBe("A");
  expect(a.b.c).toBe("J");
  expect(a.b.d).toBe("D");
});

test('Updates nested value, 2 levels', () => {

  const initialForm = {
    a: "A",
    b: {
      c: "C",
      d: {
        e: "E",
        f: "F",
      },
    }
  };

  const state = {...initialForm};

  const a = useFormReducer(initialForm)(state, {
    actionType: "update",
    key: "b.d.e",
    value: "J",
  });

  expect(a.a).toBe("A");
  expect(a.b.c).toBe("C");
  expect(a.b.d.e).toBe("J");
  expect(a.b.d.f).toBe("F");
});

test('Updates non existing not nested checkbox', () => {

  const initialForm = {
    a: "A",
    b: {
      c: "C",
      d: "D",
    }
  };

  const state = {...initialForm};

  const a = useFormReducer(initialForm)(state, {
    actionType: "updateCheckbox",
    key: "e",
    value: null,
  });

  expect(a.a).toBe("A");
  expect(a.b.c).toBe("C");
  expect(a.b.d).toBe("D");
  expect(a.e).toBe(true);
});

test('Updates non existing not nested checkbox, 2 clicks', () => {

  const initialForm = {
    a: "A",
    b: {
      c: "C",
      d: "D",
    }
  };

  const state = {...initialForm};

  const a = useFormReducer(initialForm)(state, {
    actionType: "updateCheckbox",
    key: "e",
    value: null,
  });

  const b = useFormReducer(initialForm)(a, {
    actionType: "updateCheckbox",
    key: "e",
    value: null,
  });

  expect(b.a).toBe("A");
  expect(b.b.c).toBe("C");
  expect(b.b.d).toBe("D");
  expect(b.e).toBe(false);
});

test('Updates nested checkbox', () => {

  const initialForm = {
    a: "A",
    b: {
      c: false,
      d: "D",
    }
  };

  const state = {...initialForm};

  const a = useFormReducer(initialForm)(state, {
    actionType: "updateCheckbox",
    key: "b.c",
    value: null,
  });

  expect(a.a).toBe("A");
  expect(a.b.c).toBe(true);
  expect(a.b.d).toBe("D");
});