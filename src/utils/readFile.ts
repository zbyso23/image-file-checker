export type InputFile = Blob | File;

export type ProgressCallbackData = {
  size: number;
  loaded: number;
};

export type InputFileOptions = {
  progressCallback?: (loaded: ProgressCallbackData) => void;
};

export type InputFileError = {
  message: string;
};

export function readFile(file: InputFile, options?: InputFileOptions): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const size = file.size;
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result as ArrayBuffer;
      resolve(result);
    };

    reader.onerror = () => {
      reject({ message: 'Unable to read file.' } as InputFileError);
    };

    reader.onabort = () => {
      reject({ message: 'Unable to read file - aborted.' } as InputFileError);
    };

    reader.onprogress = (e) => {
      if (!options || !options.progressCallback) return;
      const { loaded } = e;
      options.progressCallback({ loaded, size });
    };

    reader.readAsArrayBuffer(file);
  });
}
