/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function(s) {
    const total = s.length;
    let index = 0;
    let one = 0;
    let res = 0;

    while (index < total) {
        if (s[index] === "0") {
            while (index < total && s[index] === "0") {
                index++;
            }
            res += one;
        } else {
            one++;
            index++;
        }
    }

    return res;
};
