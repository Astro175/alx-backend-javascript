export default function getStudentIdsSum(arr) {
  const sum = arr.reduce((p, c) => p + c.id, 0);
  return sum;
}
