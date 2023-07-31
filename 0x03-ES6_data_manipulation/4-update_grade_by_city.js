export default function updateStudentGradeByCity(arr, location, newarr) {
  const newGrades = arr.filter((student) => student.location === location).map(
    (student) => {
      const matchedGrade = newarr.filter((gradeobj) => gradeobj.studentId === student.id);
      if (matchedGrade.length > 0) {
        return { ...student, grade: matchedGrade[0].grade };
      }
      return { ...student, grade: 'N/A' };
    },
  );
  return newGrades;
}
