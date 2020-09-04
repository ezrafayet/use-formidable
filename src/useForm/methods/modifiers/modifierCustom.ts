export {modifierCustom};

const modifierCustom = (value: any, customFunction: Function) => {
  try {
    
    return customFunction(value);
    
  } catch(error) {
    
    console.log("Error running custom modifier");
  }
};