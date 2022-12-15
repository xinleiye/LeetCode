/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let res = 0;
    let numStr = string2Num(s);

    for (let i = 0; i < k; i++) {
        res = calcStrNumSum(numStr);
        numStr = res.toString();
    }

    return res;
};

function string2Num (str) {
    const numArr = [];
    const charMap = {};

    for (let i = 0; i < 26; i++) {
        charMap[String.fromCharCode(97 + i)] = i + 1;
    }
    for (const ch of str) {
        numArr.push(charMap[ch]);
    }

    return numArr.join("");
}

function calcStrNumSum (numStr) {
    let sum = 0;

    for (const n of numStr) {
        sum += Number(n);
    }

    return sum;
}
