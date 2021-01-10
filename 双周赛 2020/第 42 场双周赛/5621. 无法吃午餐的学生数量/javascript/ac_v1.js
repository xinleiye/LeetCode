/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    while (students.length) {
        let notGet = 0;

        while (notGet !== students.length && students[0] !== sandwiches[0]) {
            students.push(students.shift());
            notGet++;
        }
        if (notGet === students.length) {
            return notGet;
        }
        students.shift();
        sandwiches.shift();
    }
    
    return 0;
};
