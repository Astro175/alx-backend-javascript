export default function hasValuesFromArray(set, array) {
  let i = 0;

  for (i = 0; i < array.length; i += 1) {
    if (!set.has(array[i])) {
      return false;
    }
  }
  return true;
}
