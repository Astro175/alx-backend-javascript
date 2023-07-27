export default class HolbertonCourse {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  // getter method for name
  get name() {
    return this._name;
  }

  // setter method for name
  set name(str) {
    if (typeof str !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = str;
  }

  // getter method for code
  get code() {
    return this._code;
  }

  // setter method for code
  set code(str) {
    if (typeof str !== 'string') {
      throw new Error('Name must be a string');
    }
    this._code = str;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
