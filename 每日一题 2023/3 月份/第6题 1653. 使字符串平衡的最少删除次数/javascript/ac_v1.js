/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const total = s.length;
    let totalA = 0;
    let curA = 0;
    let curB = 0;
    let res = total;

    for (let i = 0; i < total; i++) {
        if (s[i] === "a") {
            totalA++;
        }
    }
    for (let i = 0; i < total; i++) {
        if (s[i] === "a") {
            curA++;
        }
        res = Math.min(res, curB + totalA - curA);
        if (s[i] === "b") {
            curB++;
        }
    }

    return res;
};
