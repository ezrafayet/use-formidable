export {isFileSmallerThan};

export type IsFileSmallerThan = (file: any, maximumSizeInBytes: number) => boolean;

const isFileSmallerThan: IsFileSmallerThan = (file: any, maximumSizeInBytes: number) => {
  
  if(!file) {
    return null;
  }
  
  if(Array.isArray(file)) {
    throw new Error('Pass a single file to isFileSmallerThan');
  }
  
  return file.size < maximumSizeInBytes;
  
};