/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let res = "                "; // length > 15
    const CHAR_NUMBER = 26;
    const CHAR_CODE_a = 97;
    const getCharCount = (word) => {
        const arr = new Array(CHAR_NUMBER).fill(0);

        for (const ch of word) {
            if (ch >= "a" && ch <= "z") {
                arr[ch.charCodeAt(0) - CHAR_CODE_a]++;
            }
        }

        return arr;
    }
    const licensePlateCharArr = getCharCount(licensePlate.toLowerCase());

    words.forEach(w => {
        let matched = true;
        const tarCharArr = getCharCount(w);

        for (let i = 0; i < CHAR_NUMBER; i++) {
            if (licensePlateCharArr[i] > tarCharArr[i]) {
                matched = false;
                break;
            }
        }

        if (matched && w.length < res.length) {
            res = w;
        }
    });

    return res;
};
