/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    const total = s.length;
    let zeroCount = 0;
    let zero = 0;

    for (let i = 0; i < total; i++) {
        if (s[i] === "0") {
            zeroCount++;
            zero += i;
        }
    }

    return zero - (0 + zeroCount - 1) * zeroCount / 2;
};
