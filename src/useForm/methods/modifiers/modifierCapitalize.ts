import {isTypeString} from "../../typeGuards/isTypeString";

export {modifierCapitalize};

const modifierCapitalize = (value: unknown) => {
  
  if(!isTypeString(value)) {
    console.log("UseForm: value must be a string to be modified by modifierToUpperCase");
    return value;
  }
  
  if(value.length === 0) {
    return value;
  }
  
  if(value.length === 1) {
    return value.charAt(0).toUpperCase();
  }
  
  return `${value.charAt(0).toUpperCase()}${value?.substring(1)?.toLowerCase()}`;
  
};