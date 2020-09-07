export {isLengthAbove};

export type IsLengthAbove = (value: string, length: number) => boolean;

const isLengthAbove: IsLengthAbove = (value: string, length: number): boolean => {
  return value.length >= length;
};