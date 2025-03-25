/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {
    let min = 0;
    let max = 0;
    const total = s.length;

    for (let i = 0; i < total; i++) {
        if (locked[i] === "1") {
            max += (s[i] === "(" ? 1 : -1);
            if (max < 0) {
                return false;
            }
            min += (s[i] === "(" ? 1 : -1);
        } else {
            max++;
            min--;
        }
        if (min < 0) {
            min = 1;
        }
    }

    return min === 0;
};
