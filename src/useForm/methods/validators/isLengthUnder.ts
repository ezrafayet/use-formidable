export {isLengthUnder};

export type IsLengthUnder = (value: string, length: number) => boolean;

const isLengthUnder: IsLengthUnder = (value: string, length: number): boolean => {
  return value.length <= length;
};