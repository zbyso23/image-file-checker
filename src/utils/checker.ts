import { Headers } from "../types";
import { binaryCompare } from "./binaryCompare";
import { BinaryReader } from "./binaryReader";

export function checker(reader: BinaryReader, headers: Headers): boolean {
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