/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    const total = words.length;
    const charMap = new Array(words.length).fill(0);
    let res = 0;

    for (let i = 0; i < total; i++) {
        charMap[i] = calcVal(words[i]);
    }
    for (let i = 0; i < total; i++) {
        for (let j = i + 1; j < total; j++) {
            if ((charMap[i] & charMap[j]) === 0) {
                res = Math.max(res, words[i].length * words[j].length);
            }
        }
    }

    return res;
};

function calcVal(str) {
    let val = 0;

    for (const ch of str) {
        val |= 1 << (ch.charCodeAt() - 97);
    }

    return val
}
