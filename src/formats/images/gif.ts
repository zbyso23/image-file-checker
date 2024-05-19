import { BinaryReader, binaryCompare } from "../../utils";

const headers = {
  git87a: new Uint8Array([71, 73, 70, 56, 55, 97]),
  git89a: new Uint8Array([71, 73, 70, 56, 57, 97]),
};

export function check(reader: BinaryReader): boolean {
  const checkHeader = reader.getFirstBytes(6);
  let result: boolean = false;
  Object.entries(headers).forEach(([_key, header]) => {
    if (result) return;
    if (binaryCompare(checkHeader, header)) {
      result = true;
    }
  });
  return result;
}