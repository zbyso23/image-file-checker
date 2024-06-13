import { mock } from '../../mock';
import { BinaryReader } from '../../utils';
import { check } from './jpeg';

const { gif89a, jpeg } = mock;

test('success JPEG format', () => {
  const binaryReader = new BinaryReader(jpeg.buffer);
  expect(check(binaryReader)).toBe(true);
});

test('failed GIF89a format', () => {
  const binaryReader = new BinaryReader(gif89a.buffer);
  expect(check(binaryReader)).toBe(false);
});
