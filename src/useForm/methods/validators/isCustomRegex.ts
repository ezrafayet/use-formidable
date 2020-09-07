export {isCustomRegex};

export type IsCustomRegex = (value: string, regex: any) => boolean;

const isCustomRegex: IsCustomRegex = (value: string, regex: any) => {
  try {
    return regex.test(value.trim());
  } catch(error) {
    throw new Error("custom regex failed");
  }
};