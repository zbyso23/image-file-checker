import { BinaryReader, checker } from "../../utils";

const headers = {
  gif87a: new Uint8Array([71, 73, 70, 56, 55, 97]),
  gif89a: new Uint8Array([71, 73, 70, 56, 57, 97]),
};

export const check = (reader: BinaryReader): boolean => checker(reader, headers);