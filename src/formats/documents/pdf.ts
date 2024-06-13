import { BinaryReader, checker } from '../../utils';

const headers = {
  pdf: new Uint8Array([37, 80, 68, 70, 45]),
};

export const check = (reader: BinaryReader): boolean => checker(reader, headers);


/*
const toUint = (text) => (new TextEncoder()).encode(text);
console.log(toUint('%PDF-'));

*/