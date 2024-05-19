export function binaryCompare(buffer1: Uint8Array, buffer2: Uint8Array): boolean {
  if (buffer1.length !== buffer2.length) {
    return false;
  }
  for (let i = 0; i < buffer1.length; i++) {
    if (buffer1[i] !== buffer2[i]) {
      return false;
    }
  }
  return true;
}
