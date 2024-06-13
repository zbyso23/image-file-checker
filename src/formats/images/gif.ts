import { BinaryReader, binaryCompare, checker } from "../../utils";

const headers = {
  git87a: new Uint8Array([71, 73, 70, 56, 55, 97]),
  git89a: new Uint8Array([71, 73, 70, 56, 57, 97]),
};

export const check = (reader: BinaryReader): boolean => checker(reader, headers);