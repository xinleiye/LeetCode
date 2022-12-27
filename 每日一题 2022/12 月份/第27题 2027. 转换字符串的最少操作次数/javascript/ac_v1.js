/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let res = 0;
    const total = s.length;
    let index = 0;

    while (index < total) {
        if (s[index] === "X") {
            res++;
            index += 3;
        } else {
            index++;
        }
    }

    return res;
};
