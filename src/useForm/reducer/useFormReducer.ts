import {getCheckboxValue} from "./dependencies/getCheckboxValue";
import {deepCopyBackward} from "./dependencies/deepCopyBackward";

export {useFormReducer};

export type InitialForm = { [key: string]: any; };

type FormState = { [key: string]: any; };

type ActionsTypes = "update" | "updateCheckbox" | "reset" | "set" | undefined;

type Action = {
  
  actionType: ActionsTypes;
  key: string;
  value: any;
};

/**
 * Updates a key: value pair in a given object (state)
 * The key can reference a nested value (ex: "user.identity.firstName")
 * */
const useFormReducer = (initialForm: InitialForm) => (state: FormState, action: Action) => {
  
  if(action.actionType === "reset") {
    return ({...(initialForm || {}),});
  }
  
  if(action.actionType === "set") {
    return action.value;
  }
  
  /** Get the path as an array of successive keys */
  const path = action.key.split('.');
  
  if(action.actionType === "updateCheckbox") {
    action.value = !getCheckboxValue(state, path);
  }
  
  const updatedState = deepCopyBackward(state, path, action.value);
  
  return ({
    ...state,
    ...updatedState,
  });
  
}