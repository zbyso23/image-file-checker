import { mock } from "../../mock";
import { BinaryReader } from "../../utils";
import { check } from "./pdf";

const { png, pdf } = mock;

test('success PDF format', () => {
  const binaryReader = new BinaryReader(pdf.buffer);
  expect(check(binaryReader)).toBe(true);
});

test('failed PNG format', () => {
  const binaryReader = new BinaryReader(png.buffer);
  expect(check(binaryReader)).toBe(false);
});
