import {getCheckboxValue} from "./dependencies/getCheckboxValue";
import {deepCopyBackward} from "./dependencies/deepCopyBackward";

export {useFormReducer};

/**
 * Updates a key: value pair in a given object (state)
 * The key can reference a nested value (ex: "user.identity.firstName") 
 * */
const useFormReducer = (initialForm: any) => (state: any, action: {
  key: string,
  value: any,
  actionType?: "update" | "updateCheckbox" | "reset" | undefined,
}) => {
  
  if(action.actionType === "reset") {
    return ({
      ...(initialForm || {}),
    });
  }
  
  /** Get an array for the path if it's nested */
  const path = action.key.split('.');
  
  /** Step for checkboxes only, get the opposite of previous value */
  if(action.actionType === "updateCheckbox") {
    action.value = !getCheckboxValue(state, path);
  }
  
  /** Deeply copy the new state from the end */
  const recursiveObjectBackward = deepCopyBackward(state, path, action.value);
  
  return ({
    ...state,
    ...recursiveObjectBackward,
  });
  
}