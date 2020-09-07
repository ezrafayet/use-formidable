import {modifierToNumber} from "../modifiers/modifierToNumber";
import {isTypeString} from "../../typeGuards/isTypeString";
import {isTypeNumber} from "../../typeGuards/isTypeNumber";

export {displayerSpacesToThousands};

export type DisplayerSpacesToThousands = (value: unknown) => string;

const displayerSpacesToThousands: DisplayerSpacesToThousands = (value: unknown): string => {
  
  let stringifiedValue: string = '';
  
  if(isTypeString(value)) {
    const valueToNumber = modifierToNumber(value);
    if(!isTypeNumber(valueToNumber) && !isTypeString(valueToNumber)) {
      throw new Error("Form: value must be a string or a number");
    }
    if(isTypeNumber(valueToNumber)) {
      stringifiedValue = (valueToNumber).toString();
    }
  }
  
  if(isTypeNumber(value)) {
    stringifiedValue = value.toString();
  }
  
  const splitValue: string[] = stringifiedValue.split('.');
  
  let modifiedValueInt: string = splitValue[0] || "";
  let modifiedValueFloat: string = splitValue[1] || "";
  
  modifiedValueInt = modifiedValueInt.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
  
  return `${modifiedValueInt}.${modifiedValueFloat}`;
  
};