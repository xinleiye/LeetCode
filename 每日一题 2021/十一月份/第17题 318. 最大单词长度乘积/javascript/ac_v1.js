/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let res = 0;
    const total = words.length;
    const maskArr = new Array(words.length);

    words.forEach((word, index) => {
        let mask = 0;

        for (let i = 0; i < word.length; i++) {
            mask |= 1 << (word.charCodeAt(i) - 97);
        }
        maskArr[index] = mask;
    });

    for (let i = 0; i < total; i++) {
        const baseMask = maskArr[i];
        const baseLen = words[i].length;

        for (let j = i + 1; j < total; j++) {
            if ((baseMask & maskArr[j]) === 0) {
                res = Math.max(res, baseLen * words[j].length);
            }
        }
    }

    return res;
};
