/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let res = 0;
    let charCount = new Array(26).fill(0);
    let maxCount = 0;
    let countMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        charCount[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
        if (charCount[i] > 0) {
            maxCount = Math.max(maxCount, charCount[i]);
            if (!countMap.has(charCount[i])) {
                countMap.set(charCount[i], i);
            }
        }
    }

    for (let i = 0; i < 26; i++) {
        let count = charCount[i];

        if (count > 0 && countMap.get(count) !== i) {
            while (countMap.has(count)) {
                count--;
                res++;
            }
            if (count > 0) {
                countMap.set(count, i);
            }
        }
    }

    return res;
};
