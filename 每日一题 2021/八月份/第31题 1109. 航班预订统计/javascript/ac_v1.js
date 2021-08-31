/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    const res = new Array(n).fill(0);

    bookings.forEach(item => {
        res[item[0] - 1] += item[2];
        if (item[1] < n) {
            res[item[1]] -= item[2]; 
        }
    });

    for (let i = 1; i < n; i++) {
        res[i] += res[i - 1];
    }

    return res;
};
