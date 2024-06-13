import { mock } from "../../mock";
import { BinaryReader } from "../../utils";
import { check } from "./png";

const { gif89a, svg, png } = mock;

test('success PNG format', () => {
  const binaryReader = new BinaryReader(png.buffer);
  expect(check(binaryReader)).toBe(true);
});

test('failed GIF89a format', () => {
  const binaryReader = new BinaryReader(gif89a.buffer);
  expect(check(binaryReader)).toBe(false);
});

test('failed SVG format', () => {
  const binaryReader = new BinaryReader(svg.buffer);
  expect(check(binaryReader)).toBe(false);
});
