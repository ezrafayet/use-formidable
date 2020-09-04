import {isTypeString} from "../../typeGuards/isTypeString";

export {modifierToLowerCase};

const modifierToLowerCase = (value: unknown) => {
  
  if(!isTypeString(value)) {
    console.log("UseForm: value must be a string to be modified by modifierToLowerCase");
    return value;
  }
  
  return value.toLowerCase();
  
};