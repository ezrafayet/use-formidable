
export {setForm};

const setForm = (updateForm: Function) => (newState: any) => {
  return updateForm({key: "__no__Key", value: newState, actionType: "set"});
}