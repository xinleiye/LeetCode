/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let res = 0;
    let charArr = new Array(2);
    let charSet = new Set();

    for (let i = 0; i < charArr.length; i++) {
        charArr[i] = new Array(s.length).fill(0);
    }

    for (let i = 0; i < s.length; i++) {
        charSet.add(s[i]);
        charArr[0][i] = charSet.size;
    }

    charSet.clear();
    for (let i = s.length - 1; i >= 0; i--) {
        charSet.add(s[i]);
        charArr[1][i] = charSet.size;
    }

    for (let i = 0, len = s.length - 1; i < len; i++) {
        if (charArr[0][i] === charArr[1][i + 1]) {
            res++;
        }
    }

    return res;
};
