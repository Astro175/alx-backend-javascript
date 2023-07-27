export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;

    if (typeof this._name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof this._length !== 'number' || this._length <= 0) {
      throw new Error('Length must be a number');
    }
    if (!Array.isArray(this._students)) {
      throw new Error('Students must be an array');
    }
    if (!this._students.every((student) => typeof student === 'string')) {
      throw new Error('Each student must be a string');
    }
  }

  // get method for name
  get name() {
    return this._name;
  }

  // set method for name
  set name(str) {
    if (typeof str === 'string') {
      this._name = str;
    } else {
      throw new Error('Name must be a string');
    }
  }

  // get method for length
  get length() {
    return this._length;
  }

  set length(num) {
    if (typeof num === 'number') {
      this._length = num;
    } else {
      throw new Error('Length must be a number');
    }
  }

  // get method for students
  get students() {
    return this._students;
  }

  // set method for students
  set students(arr) {
    if (arr instanceof Array) {
      this._students = arr;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }
}
