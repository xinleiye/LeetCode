/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let res = 0;
    const total = seats.length;

    seats.sort((v1, v2) => v1 - v2);
    students.sort((v1, v2) => v1 - v2);
    for (let i = 0; i < total; i++) {
        res += Math.abs(seats[i] - students[i]);
    }

    return res;
};
