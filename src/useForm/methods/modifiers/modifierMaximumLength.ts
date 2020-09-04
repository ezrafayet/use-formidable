import {isTypeString} from "../../typeGuards/isTypeString";

export {modifierMaximumLength};

const modifierMaximumLength = (value: unknown, maximumLength: number) => {
  
  if(!isTypeString(value)) {
    console.log("UseForm: value must be a string to be modified by modifierToUpperCase");
    return value;
  }
  
  if(value.length <= maximumLength) {
    return value;
  }
  
  return value.substring(0, maximumLength);

};