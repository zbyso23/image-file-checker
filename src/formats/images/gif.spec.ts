import { BinaryReader } from "../../utils";
import { check } from "./gif";

const headerGIF87a = new Uint8Array([71, 73, 70, 56, 55, 97]);
const headerGIF89a = new Uint8Array([71, 73, 70, 56, 57, 97]);
const headerSVG = new Uint8Array([60, 115, 118, 103]);

test('success GIF87a format', () => {
  const binaryReader = new BinaryReader(headerGIF87a.buffer);
  expect(check(binaryReader)).toBe(true);
});

test('success GIF89a format', () => {
  const binaryReader = new BinaryReader(headerGIF89a.buffer);
  expect(check(binaryReader)).toBe(true);
});

test('failed SVG format', () => {
  const binaryReader = new BinaryReader(headerSVG.buffer);
  expect(check(binaryReader)).toBe(false);
});
