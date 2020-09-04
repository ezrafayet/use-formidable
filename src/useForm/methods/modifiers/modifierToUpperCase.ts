import {isTypeString} from "../../typeGuards/isTypeString";

export {modifierToUpperCase};

const modifierToUpperCase = (value: unknown) => {
  
  if(!isTypeString(value)) {
    console.log("UseForm: value must be a string to be modified by modifierToUpperCase");
    return value;
  }
  
  return value.toUpperCase();
};