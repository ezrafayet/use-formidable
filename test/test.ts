import {FormHandler} from "../src/useForm/FormHandler";

const fh = new FormHandler({
  initialState: {
    identity: {
      fn: "a",
      ln: "b"
    },
    lol: "pop",
  }
});

fh.setUpdateForm(() => {});

console.log(fh.reducer({identity: {
    fn: "a",
    ln: "b"
  },
  lol: "pop",}, {actionType: "update", key: "identity.fn", value: "zzzzzzzz"}));

console.log(fh.reducer({identity: {
    fn: "a",
    ln: "b"
  },
  lol: "pop",}, {actionType: "update", key: "lol", value: "zzzzzzzz"}));

