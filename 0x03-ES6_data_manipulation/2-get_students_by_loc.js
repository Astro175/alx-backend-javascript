export default function getStudentsByLocation(arr, city) {
  const newarr = arr.filter((item) => item.location === city);
  return newarr;
}
