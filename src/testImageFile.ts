import { readFile } from './utils';

export function testImageFile(file: File | Blob | ArrayBuffer): Promise<unknown> {
  return new Promise(async (resolve, reject) => {
    try {
      let fileBuffer: ArrayBuffer;
      if (file instanceof Blob || file instanceof File) {
        fileBuffer = await readFile(file);
      } else {
        fileBuffer = file;
      }
      resolve(fileBuffer);
    } catch (err) {
      reject(err);
    }
  });
}
