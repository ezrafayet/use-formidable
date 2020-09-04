export {isCustomValidator};

const isCustomValidator = (value: any, customValidator: any) => {
  try {
    return customValidator(value);
  } catch(error) {
    throw new Error("custom validator failed");
  }
};