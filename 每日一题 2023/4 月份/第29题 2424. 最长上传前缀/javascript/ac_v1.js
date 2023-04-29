/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    const chCount = new Array(26).fill(0);
    const chArr = [];

    for (const ch of word) {
        chCount[ch.charCodeAt() - 97]++;
    }
    for (const c of chCount) {
        if (c > 0) {
            chArr.push(c);
        }
    }
    if (chArr.length === 1) {
        return true;
    }
    chArr.sort((n1, n2) => n2 - n1);
    if (chArr.length === 2) {
        return chArr[0] - chArr[1] === 1 || chArr[1] === 1;
    }
    if (chArr[0] - chArr[1] === 1) {
        for (let i = 2; i < chArr.length; i++) {
            if (chArr[i] !== chArr[i - 1]) {
                return false;
            }
        }
        return true;
    }
    if (chArr[0] === chArr[1]) {
        for (let i = 1; i < chArr.length - 1; i++) {
            if (chArr[i] !== chArr[i - 1]) {
                return false;
            }
        }
        return chArr[chArr.length - 1] === 1;
    }

    return false;
};
