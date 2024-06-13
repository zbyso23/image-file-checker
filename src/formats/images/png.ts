import { BinaryReader, checker } from '../../utils';

const headers = {
  png: new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
};

export const check = (reader: BinaryReader): boolean => checker(reader, headers);
