export {isTypeNumber};

const isTypeNumber = (value: any): value is number => {
  
  return typeof value === "number";
  
}