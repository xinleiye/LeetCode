/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    const calcCharCount = (str) => {
        const arr = new Array(26).fill(0);

        for (const ch of str) {
            arr[ch.charCodeAt() - 97]++;
        }

        return arr;
    };
    const targetChar = calcCharCount(target);
    const srcChar = calcCharCount(s);
    let res = 100;

    for (let i = 0; i < 26; i++) {
        if (targetChar[i]) {
            res = Math.min(res, Math.floor(srcChar[i] / targetChar[i]));
        }
    }

    return res;
};
