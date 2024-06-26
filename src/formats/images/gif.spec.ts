import { mock } from "../../mock";
import { BinaryReader } from "../../utils";
import { check } from "./gif";

const { gif87a, gif89a, svg } = mock;

test('success GIF87a format', () => {
  const binaryReader = new BinaryReader(gif87a.buffer);
  expect(check(binaryReader)).toBe(true);
});

test('success GIF89a format', () => {
  const binaryReader = new BinaryReader(gif89a.buffer);
  expect(check(binaryReader)).toBe(true);
});

test('failed SVG format', () => {
  const binaryReader = new BinaryReader(svg.buffer);
  expect(check(binaryReader)).toBe(false);
});
