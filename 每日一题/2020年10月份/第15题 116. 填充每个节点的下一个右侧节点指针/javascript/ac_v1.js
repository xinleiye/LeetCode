/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let res = [];
    let charBuf = new Array(26).fill(0);

    for (let i = 0; i < A[0].length; i++) {
        charBuf[A[0].charCodeAt(i) - 97]++;
    }

    for (let i = 1; i < A.length; i++) {
        let tmpBuf = new Array(26).fill(0);
        for (let j = 0; j < A[i].length; j++) {
            tmpBuf[A[i].charCodeAt(j) - 97]++;
        }
        for (let j = 0; j < 26; j++) {
            charBuf[j] = Math.min(charBuf[j], tmpBuf[j]);
        }
    }

    for (let i = 0; i < 26; i++) {
        let ch;

        if (charBuf[i] > 0) {
            ch = String.fromCharCode(i + 97);
            for (let j = 0; j < charBuf[i]; j++) {
                res.push(ch);
            }
        }
    }

    return res;
};
