import {useReducer} from "react";
import {isEmail} from "./methods/validators/isEmail";
import {isLengthAbove} from "./methods/validators/isLengthAbove";
import {isCustomRegex} from "./methods/validators/isCustomRegex";
import {isLengthUnder} from "./methods/validators/isLengthUnder";
import {isCustomValidator} from "./methods/validators/isCustomValidator";
import {isFileSmallerThan} from "./methods/validators/isFileSmallerThan";
import {isFileMime} from "./methods/validators/isFileMime";
import {displayerSpacesToThousands} from "./methods/displayers/displayerSpacesToThousands";
import {useFormReducer} from "./reducer/useFormReducer";
import {getInitialForm} from "./methods/getInitialForm";
import {reset} from "./methods/reset";
import {update} from "./methods/update";

export {useForm};

const useForm = (initialForm: any,) => {
  
  const [form, updateForm] = useReducer(useFormReducer(initialForm), initialForm);
  
  const methods = {
    reset: reset(updateForm),
    getInitialForm: getInitialForm(initialForm),
  }
  
  const validators = {
    
    isFileSmallerThan: isFileSmallerThan,
    isFileMime: isFileMime,
    isCustomValidator: isCustomValidator,
    isLengthAbove: isLengthAbove,
    isLengthUnder: isLengthUnder,
    isCustomRegex: isCustomRegex,
    isEmail: isEmail,
  }
  
  const displayers = {
    
    displayerSpacesToThousands: displayerSpacesToThousands,
  }
  
  const collectionOfMethods = {...methods, ...validators, ...displayers,};
  
  return [form, update(updateForm), collectionOfMethods];
  
}