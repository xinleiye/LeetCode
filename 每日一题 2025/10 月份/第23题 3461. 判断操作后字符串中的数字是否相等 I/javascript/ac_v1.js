/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    const total = s.length;
    const scp = s.split("").map(n => Number(n));

    for (let i = 0; i < total - 2; i++) {
        for (let j = 0; j < total - i - 1; j++) {
            scp[j] = (scp[j] + scp[j + 1]) % 10;
        }
    }

    return scp[0] === scp[1];
};
