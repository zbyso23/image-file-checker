import { BinaryReader } from "../../utils";

const headers = [
  new Uint8Array([71, 73, 70, 56, 57, 97]),
  new Uint8Array([71, 73, 70, 56, 57, 97]),
];

export function test(reader: BinaryReader) {
  const header = reader.getFirstBytes();
  
}