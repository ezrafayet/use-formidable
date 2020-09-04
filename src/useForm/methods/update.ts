import {modifierCustom} from "./modifiers/modifierCustom";
import {modifierMaximumLength} from "./modifiers/modifierMaximumLength";
import {modifierToLowerCase} from "./modifiers/modifierToLowerCase";
import {modifierToUpperCase} from "./modifiers/modifierToUpperCase";
import {modifierCapitalize} from "./modifiers/modifierCapitalize";
import {modifierToNumber} from "./modifiers/modifierToNumber";
import {modifierToKeepNumbers} from "./modifiers/modifierToKeepNumbers";

export {update};

interface IModifiers {
  toLowerCase?: boolean,
  toUpperCase?: boolean,
  toNumber?: boolean,
  toKeepNumbers?: boolean,
  toCapitalized?: boolean,
  custom?: (input: any) => any,
  maximumLength?: number,
}

const update = (updateForm: Function) => (liveModifiers: IModifiers = {}) => (event: { target: { name: any, type: any, value: any, files?: any } }) => {

    if(!event.target?.name) {
      throw new Error(`Your request must have a name`);
    }

    let value: any = event?.target?.value;

    switch(event.target.type) {

      /** Inputs Affected by liveModifiers */
      case 'custom':
      case 'hidden':
      case 'password':
      case 'radio':
      case 'search':
      case 'select-one':
      case 'text':
      case 'textarea':
        ((typeof liveModifiers.custom === "function") && (value = modifierCustom(value, liveModifiers.custom)));
        (!!liveModifiers.maximumLength && (value = modifierMaximumLength(value, liveModifiers.maximumLength)));
        (!!liveModifiers.toLowerCase && (value = modifierToLowerCase(value)));
        (!!liveModifiers.toUpperCase && (value = modifierToUpperCase(value)));
        (!!liveModifiers.toCapitalized && (value = modifierCapitalize(value)));
        (!!liveModifiers.toNumber && (value = modifierToNumber(value)));
        (!!liveModifiers.toKeepNumbers && (value = modifierToKeepNumbers(value)));
        return updateForm({key: event?.target?.name, value: value, actionType: "update"});

      /** Checkbox only */
      case 'checkbox':
        return updateForm({key: event.target?.name, value: null, actionType: "updateCheckbox"});

      /** Email only */
      case 'email':
        return updateForm({key: event?.target?.name, value: event?.target?.value?.trim().toLowerCase(), actionType: "update"});

      /** Inputs Non-affected by liveModifiers */
      case 'color':
      case 'date':
      case 'datetime-local':
      case 'month':
      case 'number':
      case 'range':
      case 'tel':
      case 'time':
      case 'url':
      case 'week':
        return updateForm({key: event?.target?.name, value: event?.target?.value, actionType: "update"});

      case 'file':
        return updateForm({key: event?.target?.name, value: event?.target?.files, actionType: "update"});

      case 'button':
      case 'image':
      case 'reset':
      case 'submit':
      default:
        throw new Error(`Unhandled type ${event?.target?.type}`);
    }
  }