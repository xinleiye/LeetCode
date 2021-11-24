/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    const res = [];
    const numCount = new Array(10).fill(0);
    const charArr = new Array(26).fill(0);

    for(let ch of s) {
        charArr[ch.charCodeAt(0) - 97]++;
    }

    // "z"
    numCount[0] = charArr[25];
    // "w"
    numCount[2] = charArr[22];
    // "u"
    numCount[4] = charArr[20];
    // "x"
    numCount[6] = charArr[23];
    // "g"
    numCount[8] = charArr[6];

    // "h"
    numCount[3] = charArr[7] - numCount[8];
    // "f"
    numCount[5] = charArr[5] - numCount[4];
    // "s"
    numCount[7] = charArr[18] - numCount[6];

    // "o"
    numCount[1] = charArr[14] - numCount[0] - numCount[2] - numCount[4];
    // "i"
    numCount[9] = charArr[8] - numCount[5] - numCount[6] - numCount[8];

    for (let i = 0; i < 10; i++) {
        const ch = String.fromCharCode(i + 48);
        const count = numCount[i];

        for (let j = 0; j < count; j++) {
            res.push(ch);
        }
    }
    return res.sort().join("");
};
