/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    let a1 = 1;
    let step = 0;
    let diff = 1;
    let count = n;

    while (count > 1) {
        if (step % 2 === 0) {
            a1 += diff;
        } else {
            a1 = (count % 2 === 1) ? a1 += diff : a1;
        }
        step++;
        count = count >>> 1;
        diff = diff << 1;
    }

    return a1;
};
