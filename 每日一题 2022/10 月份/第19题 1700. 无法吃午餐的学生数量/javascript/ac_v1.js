/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let needed0 = 0;
    let needed1 = 0;

    for (const needed of students) {
        needed === 0 ? needed0++ : needed1++;
    }
    for (const sandwich of sandwiches) {
        if (sandwich === 0) {
            if (needed0) {
                needed0--;
            } else {
                return needed1;
            }
        }
        if (sandwich === 1) {
            if (needed1) {
                needed1--;
            } else {
                return needed0;
            }
        }
    }

    return 0
};
