import {getNestedValuesByPath} from "./getNestedValuesByPath";

export {deepCopyBackward};

/**
 * Deeply copy an object from the last key: value pair
 * @param state
 * @param path
 * @param lastValue
 */
const deepCopyBackward = (state: any, path: string[], lastValue: any) => {
  
  /** Initialize the deepest value */
  let recursiveObjectBackward = lastValue;
  
  /** Add recursively values from the end */
  for(let i = path.length - 1; i >= 0; i--) {
    const nestedValues = getNestedValuesByPath(state, path.slice(0, i));
    recursiveObjectBackward = {
      ...nestedValues,
      [path[i]]: recursiveObjectBackward,
    };
  }
  
  return recursiveObjectBackward;
}