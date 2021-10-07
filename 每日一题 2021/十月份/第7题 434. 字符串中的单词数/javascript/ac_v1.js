/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let res = 0;
    let index = 0;
    const length = s.length;

    while (index < length) {
        if (s[index] !== ' ') {
            res++;
            while (index < length && s[index] !== ' ') {
                index++;
            }
        } else {
            index++;
        }
    }

    return res;
};
