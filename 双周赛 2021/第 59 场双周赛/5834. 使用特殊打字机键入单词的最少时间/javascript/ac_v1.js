/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let res = 0;
    let preCode = 97; // "a"

    for (let i = 0, len = word.length; i < len; i++) {
        const curCode = word.charCodeAt(i);
        const dis = Math.abs(curCode - preCode);

        res += Math.min(dis, 26 - dis) + 1;
        preCode = curCode;
    }

    return res;
};
