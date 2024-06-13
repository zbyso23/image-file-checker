import { BinaryReader, checker } from '../../utils';

const headers = {
  jpeg: new Uint8Array([255, 216, 255]),
};

export const check = (reader: BinaryReader): boolean => checker(reader, headers);


