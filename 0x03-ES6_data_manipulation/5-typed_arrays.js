export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view1 = new DataView(buffer);

  if (position >= buffer.length) {
    console.log('Error: position is out of bounds');
  } else {
    view1.setInt8(position, value);
  }

  return buffer;
}
