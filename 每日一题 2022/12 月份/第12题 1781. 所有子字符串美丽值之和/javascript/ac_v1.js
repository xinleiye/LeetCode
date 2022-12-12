/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    const total = s.length;
    const charCount = new Array(total + 1).fill(0).map(() => new Array(26).fill(0));
    for (let i = 1; i <= total; i++) {
        const src = charCount[i - 1];
        const tar = charCount[i];
        for (let j = 0; j < 26; j++) {
            tar[j] = src[j];
        }
        tar[s.charCodeAt(i - 1) - 97]++;
    }

    let res = 0;
    let maxFreq = 0;
    let minFreq = 500;
    for (let i = 1; i <= total; i++) {
        const start = charCount[i - 1];
        for (let j = i + 1; j <= total; j++) {
            const end = charCount[j];
            maxFreq = 0;
            minFreq = 500;
            for (let k = 0; k < 26; k++) {
                const diff = end[k] - start[k];
                if (diff > 0) {
                    maxFreq = Math.max(maxFreq, diff);
                    minFreq = Math.min(minFreq, diff);
                }
            }
            res += maxFreq - minFreq;
        }
    }

    return res;
};
