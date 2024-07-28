/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(s, k) {
    const length = s.length;
    const res = s.split("");
    let index = 0;

    while (k > 0 && index < length) {
        const curCode = s.charCodeAt(index);
        const dis = Math.min(curCode - 97, 122 - curCode + 1);

        if (dis <= k) {
            res[index] = "a";
        } else {
            res[index] = String.fromCharCode(curCode - k);
        }
        k -= dis;
        index++;
    }

    return res.join("");
};
