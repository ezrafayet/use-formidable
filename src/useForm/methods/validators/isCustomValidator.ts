export {isCustomValidator};

export type IsCustomValidator = (value: any, customValidator: Function) => Function;

const isCustomValidator: IsCustomValidator = (value: any, customValidator: Function) => {
  try {
    return customValidator(value);
  } catch(error) {
    throw new Error("custom validator failed");
  }
};