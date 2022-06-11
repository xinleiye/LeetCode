/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let cur0 = 0;
    let cur1 = 0;

    for (const ch of s) {
        let newCur0 = cur0;
        let newCur1 = Math.min(cur0, cur1);

        if (ch === "1") {
            newCur0++;
        } else {
            newCur1++;
        }
        cur0 = newCur0;
        cur1 = newCur1;
    }

    return Math.min(cur0, cur1);
};
