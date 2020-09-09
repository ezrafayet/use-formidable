import {useReducer} from "react";
import {IsCustomEmail, isEmail} from "./methods/validators/isEmail";
import {IsLengthAbove, isLengthAbove} from "./methods/validators/isLengthAbove";
import {IsCustomRegex, isCustomRegex} from "./methods/validators/isCustomRegex";
import {IsLengthUnder, isLengthUnder} from "./methods/validators/isLengthUnder";
import {IsCustomValidator, isCustomValidator} from "./methods/validators/isCustomValidator";
import {IsFileSmallerThan, isFileSmallerThan} from "./methods/validators/isFileSmallerThan";
import {IsFileMime, isFileMime} from "./methods/validators/isFileMime";
import {DisplayerSpacesToThousands, displayerSpacesToThousands} from "./methods/displayers/displayerSpacesToThousands";
import {InitialForm, useFormReducer} from "./reducer/useFormReducer";
import {getInitialForm} from "./methods/getInitialForm";
import {reset} from "./methods/reset";
import {update} from "./methods/update";
import {setForm} from "./methods/setForm";

export {useForm};

interface Methods {
  
  reset: Function;
  getInitialForm: Function;
  setForm: Function;
}

interface Validators {
  
  isFileSmallerThan: IsFileSmallerThan;
  isFileMime: IsFileMime;
  isCustomValidator: IsCustomValidator;
  isLengthAbove: IsLengthAbove;
  isLengthUnder: IsLengthUnder;
  isCustomRegex: IsCustomRegex;
  isEmail: IsCustomEmail;
}

interface Displayers {
  
  displayerSpacesToThousands: DisplayerSpacesToThousands;
}

interface Formidable extends Methods, Validators, Displayers {
}

const useForm = (initialForm: InitialForm,) => {
  
  const [form, updateForm] = useReducer(useFormReducer(initialForm), initialForm);
  
  const methods: Methods = {
    
    reset: reset(updateForm),
    getInitialForm: getInitialForm(initialForm),
    setForm: setForm(updateForm),
  }
  
  const validators: Validators = {
    
    isFileSmallerThan: isFileSmallerThan,
    isFileMime: isFileMime,
    isCustomValidator: isCustomValidator,
    isLengthAbove: isLengthAbove,
    isLengthUnder: isLengthUnder,
    isCustomRegex: isCustomRegex,
    isEmail: isEmail,
  }
  
  const displayers: Displayers = {
    
    displayerSpacesToThousands: displayerSpacesToThousands,
  }
  
  const formidable: Formidable = {...methods, ...validators, ...displayers,};
  
  return [form, update(updateForm), formidable];
  
}