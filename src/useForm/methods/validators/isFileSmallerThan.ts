export {isFileSmallerThan};

const isFileSmallerThan = (file: any, maximumSizeInBytes: number) => {
  
  if(!file) {
    return null;
  }
  
  if(Array.isArray(file)) {
    throw new Error('Pass a single file to isFileSmallerThan');
  }
  
  return file.size < maximumSizeInBytes;
  
};