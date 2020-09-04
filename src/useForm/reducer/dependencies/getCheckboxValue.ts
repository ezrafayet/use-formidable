export {getCheckboxValue};

/** Get a boolean value for a checkbox */
const getCheckboxValue = (obj: any, path: string[]) => {
  
  let nestedValues = obj;
  
  for(let p of path) {
    
    if(!nestedValues[p]) {
      return false;
    }
    
    if(nestedValues[p] === true) {
      return true;
    }
    
    nestedValues = nestedValues[p];
  }
  
  return nestedValues === true;
}