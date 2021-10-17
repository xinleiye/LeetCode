/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let res = 0;
    const length = seats.length;

    seats.sort((val1, val2) => val1 - val2);
    students.sort((val1, val2) => val1 - val2);
    for (let i = 0; i < length; i++) {
        res += Math.abs(seats[i] - students[i]);
    }

    return res;
};
