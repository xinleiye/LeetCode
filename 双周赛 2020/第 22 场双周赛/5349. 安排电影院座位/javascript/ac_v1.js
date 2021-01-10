/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    let res = n * 2;
    let reservedSeatsMap = new Map();
    // 0：保留；1：可坐
    let byteMap = new Map();

    for (let i = 1; i <= 10; i++) {
        byteMap.set(i, 1023 ^ (1 << (10 - i)));
    }

    reservedSeats.forEach((aSeat) => {
        let reservedSeat = reservedSeatsMap.get(aSeat[0]);

        // 此处可以不用has，因为座位排号必然大于0，恒为真
        if (reservedSeat) {
            reservedSeatsMap.set(aSeat[0], reservedSeat & byteMap.get(aSeat[1]));
        } else {
            reservedSeatsMap.set(aSeat[0], 1023 & byteMap.get(aSeat[1]));
        }
    });

//     for (let i = 1; i <= n; i++) {
//         if (reservedSeatsMap.has(i)) {
//             let reservedSeat = reservedSeatsMap.get(i);
    
//             if ((reservedSeat & 510) === 510) {
//                 res += 2;
//             } else if ((reservedSeat & 120) === 120 || (reservedSeat & 30) === 30 || (reservedSeat & 480) === 480) {
//                 res += 1;
//             }
//         } else {
//             res += 2;
//         }
//     }
    reservedSeatsMap.forEach((val, key) => {
        if ((val & 510) === 510) {
            res -= 0;
        } else if ((val & 120) === 120 || (val & 30) === 30 || (val & 480) === 480) {
            res -= 1;
        } else {
            res -= 2;
        }
    });

    return res;
};
