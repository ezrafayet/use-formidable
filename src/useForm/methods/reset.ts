export {reset};

const reset = (updateForm: Function) => () => {return updateForm({key: "__no__Key", value: "__no__value", actionType: "reset"});}