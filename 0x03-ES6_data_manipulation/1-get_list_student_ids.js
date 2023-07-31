export default function getListStudentIds(arr) {
  if (Array.isArray(arr) === false) {
    return [];
  }
  const newarr = arr.map((item) => item.id);
  return newarr;
}
