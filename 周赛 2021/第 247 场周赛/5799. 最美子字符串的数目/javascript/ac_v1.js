/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
    let res = 0;
    const LEN = 10;
    const length = word.length;
    const charNum = new Array(word.length + 1);
    const valid = (start, end) => {
        let oddNum = 0;
        const s = charNum[start - 1];
        const e = charNum[end];

        for (let i = 0; i < LEN; i++) {
            if ((e[i] - s[i]) % 2) {
                oddNum++;
            }
        }
        
        return oddNum <= 1;
    };

    charNum[0] = new Array(LEN).fill(0);
    for (let i = 1; i <= length; i++) {
        charNum[i] = new Array(LEN).fill(0);
        for (let j = 0; j < LEN; j++) {
            charNum[i][j] += charNum[i - 1][j];
        }
        charNum[i][word.charCodeAt(i - 1) - 97]++;
    }

    for (let i = 1; i <= length; i++) {
        res++;
        for (let j = i + 1; j <= length; j++) {
            if (valid(i, j)) {
                res++;
            }
        }
    }

    return res;
};
