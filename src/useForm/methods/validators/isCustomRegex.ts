export {isCustomRegex};

const isCustomRegex = (value: any, regex: any) => {
  try {
    return regex.test(value.trim());
  } catch(error) {
    throw new Error("custom regex failed");
  }
};