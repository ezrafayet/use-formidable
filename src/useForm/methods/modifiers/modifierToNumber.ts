import {isTypeString} from "../../typeGuards/isTypeString";
import {isTypeNumber} from "../../typeGuards/isTypeNumber";

export {modifierToNumber};

const modifierToNumber = (value: unknown) => {
  
  if(isTypeNumber(value)) {
    return value;
  }
  
  if(!isTypeString(value)) {
    throw new Error('UseForm: Value should be a string');
  }
  
  let modifiedValue = "";
  
  for(let character of value) {
    if(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(character)) {
      if(character === "." && modifiedValue.includes('.')) {
        continue;
      }
      modifiedValue = modifiedValue + character;
    }
  }
  
  if(modifiedValue.includes('.')) {
    return parseFloat(modifiedValue);
  }
  
  return parseInt(modifiedValue);
  
};