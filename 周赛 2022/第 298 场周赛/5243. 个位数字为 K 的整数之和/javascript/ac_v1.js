/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function(num, k) {
    if (num === 0) {
        return 0;
    }

    for (let i = 1; i <= num; i++) {
        const rest = num - i * k;

        if (rest >= 0 && (rest % 10) === 0) {
            return i;
        }
    }

    return -1;
};
