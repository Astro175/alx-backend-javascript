// Nodejs function to read a file async
// Fs module with filesync module to read

const fs = require('fs');

function countStudents(filepath) {
  try {
    const data = fs.readFileSync(filepath, { encoding: 'utf-8', flag: 'r' });
    // Splits the data into rows to count the rows
    const rows = data.toString().split('\n');
    const courses = {};
    const names = {};
    for (let i = 0; i < rows.length; i += 1) {
      // Seperates the rows into columns of fields
      const fields = rows[i].split(',');
      if (Object.prototype.hasOwnProperty.call(names, fields[3])) {
        // Checks if the names object has the SWE or CS attribute and adds the names
        names[fields[3]].push(fields[0]);
      } else {
        names[fields[3]] = [fields[0]];
      }
      // if not, adds the key and equal it the value of the name
      if (Object.prototype.hasOwnProperty.call(courses, fields[3])) {
        // Checks if the course object has the SWE Or CS attribute
        courses[fields[3]] += 1;
        // Else it adds it and gives it a value of 1
      } else {
        courses[fields[3]] = 1;
      }
    }
    console.log(`Number of students: ${rows.length - 1}`);
    for (const [key, value] of Object.entries(courses)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${names[key].join(', ')}`);
      }
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
