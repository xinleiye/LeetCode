/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    let charCount = new Array(26).fill(0);
    for (const ch of s) {
        charCount[ch.charCodeAt() - 97]++;
    }

    const res = [];
    let cur = 25;
    let next = 24;
    let repeat = 0;
    while (cur >= 0 && next >= 0) {
        if (charCount[cur] === 0) {
            cur--;
            repeat = 0;
        } else if (repeat < repeatLimit) {
            charCount[cur]--;
            res.push(String.fromCharCode(cur + 97));
            repeat++;
        } else if (next >= cur || charCount[next] === 0) {
            next--;
        } else {
            charCount[next]--;
            res.push(String.fromCharCode(next + 97));
            repeat = 0;
        }
    }

    return res.join("");
};
