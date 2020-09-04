export {isTypeString};

const isTypeString = (value: any): value is string => {
  
  return typeof value === "string";
  
}
