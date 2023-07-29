function createIteratorObject(reportObject) {
  let currentDepartment = null;
  let currentEmployee = null;

  function next() {
    if (currentEmployee === null) {
      if (currentDepartment === null) {
        currentDepartment = reportObject.departments[0];
      } else {
        currentDepartment = currentDepartment.next;
      }

      if (currentDepartment === null) {
        return { value: null, done: true };
      }

      currentEmployee = currentDepartment.employees[0];
    } else {
      currentEmployee = currentEmployee.next;
    }

    return { value: currentEmployee, done: currentEmployee === null };
  }

  return {
    next,
  };
}
