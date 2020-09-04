export {getNestedValuesByPath};

/** Get nested values at a specific path */
const getNestedValuesByPath = (obj: any, path: string[]) => {
  
  let nestedValues = obj;
  
  for(let p of path) {
    
    if(!nestedValues[p]) {
      return null;
    }
    
    nestedValues = nestedValues[p];
  }
  
  return nestedValues;
}