/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    const seatPos = [];
    const total = seats.length;
    for (let i = 0; i < total; i++) {
        if (seats[i] === 1) {
            seatPos.push(i);
        }
    }

    let res = Math.max(seatPos[0] - 0, total - 1 - seatPos[seatPos.length - 1]);
    for (let i = seatPos.length - 1; i > 0; i--) {
        res = Math.max(res, (seatPos[i] - seatPos[i - 1]) >>> 1);
    }

    return res;
};
