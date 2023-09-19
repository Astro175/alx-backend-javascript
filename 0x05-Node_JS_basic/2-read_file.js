// Nodejs function to read a file async
// Fs module with filesync module to read

fs = require('fs')
function countStudents(filepath) {
    try {
        data = fs.readFileSync(filepath, {encoding: 'utf-8', flag: 'r'})
        // Splits the data into rows to count the rows
        rows = data.split('\n');
        console.log('Number of students:', rows.length - 1);
        console.log(rows[3]);
        csList = {};
        sweList = {};
        let cs = 0;
        let swe = 0;
        for (const line of rows) {
            const fields = line.split(',')
            if (fields[3] === 'CS')  {
                cs += 1;
                csList.push(fields[0])
            }
            else if (fields[3] === 'SWE') {
                swe += 1;
                sweList.push(fields[0]);
            }
        }
        for (i = 0; i <= row.length - 1; i++) {
            
        }

    }
    catch(err) {
        console.log('Cannot load the database');
    }
}

module.exports = countStudents;