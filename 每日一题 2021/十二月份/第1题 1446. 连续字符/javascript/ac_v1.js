/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let res = 1;
    const len = s.length;
    let index = 0;
    
    while (index < len) {
        let ch = s[index];
        let count = 1;

        while (index + 1 < len && ch === s[index + 1]) {
            count++;
            index++;
        }
        index++;
        res = Math.max(res, count);
    }

    return res;
};
