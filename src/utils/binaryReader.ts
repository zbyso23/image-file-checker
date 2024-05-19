export class BinaryReader {
  private buffer: ArrayBuffer;
  private bytes: Uint8Array;

  constructor(buffer: ArrayBuffer) {
    this.buffer = buffer;
    this.bytes = new Uint8Array(buffer);
  }

  getFirstBytes = (count: number = 16) => {
    return this.bytes.slice(0, count);
  };

  getLastBytes = (count: number = 16) => {
    const start = this.bytes.length - (count + 1);
    const end = this.bytes.length - 1;
    return this.bytes.slice(start, end);
  };
}
