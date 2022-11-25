/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
    let res = 0;

    for (const word of words) {
        if (expressive(s, word)) {
            res++;
        }
    }

    return res;
};

function expressive (src, tar) {
    let sIndex = 0;
    const sTotal = src.length;
    let tIndex = 0;
    const tTotal = tar.length;

    while (sIndex < sTotal && tIndex < tTotal) {
        let sLen = 0;
        let tLen = 0;
        const ch = src[sIndex]

        if (src[sIndex] !== tar[tIndex]) {
            return false;
        }
        while (sIndex < sTotal && src[sIndex] === ch) {
            sLen++;
            sIndex++;
        }
        while (tIndex < tTotal && tar[tIndex] === ch) {
            tLen++;
            tIndex++;
        }
        if (sLen < tLen) {
            return false;
        }
        if (sLen !== tLen && sLen < 3) {
            return false;
        }
    }

    return sIndex === sTotal && tIndex === tTotal;
}
