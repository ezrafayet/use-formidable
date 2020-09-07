export {isFileMime};

type TSupportedMimes = "pdf" | "jpeg" | "png" | "gif" | "svg" | "doc" | "docx" | "odt" | "xls" | "xlsx" | "ods" | "csv";

const mimesDictionary = {
  pdf: "application/pdf",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  svg: "image/svg+xml",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  odt: "application/vnd.oasis.opendocument.text",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ods: "application/vnd.oasis.opendocument.spreadsheet",
  csv: "text/csv",
};

export type IsFileMime = (file: any, extensions: TSupportedMimes[]) => boolean;

const isFileMime: IsFileMime = (file: any, extensions: TSupportedMimes[]) => {
  
  if(window.FileReader && window.Blob) {
    
    if(!file) {
      return null;
    }
    
    if(Array.isArray(file)) {
      throw new Error('Pass a single file to isFileSmallerThan');
    }
    
    const fileType = file.type;
    
    const mimes = extensions.map((extension: TSupportedMimes) => mimesDictionary[extension]) || [];
    
    return mimes.includes(fileType);
    
  } else {
    
    throw new Error("Files and Blob are not supported");
  }
};