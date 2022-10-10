/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    const chCount = new Array(26).fill(0);
    for (const ch of word) {
        chCount[ch.charCodeAt() - 97]++;
    }

    const countArr = [];
    for (const count of chCount) {
        if (count) {
            countArr.push(count);
        }
    }

    const length = countArr.length;
    for (i = 0; i < length; i++) {
        const countSet = new Set();

        countArr[i]--;
        for (let j = 0; j < length; j++) {
            if (countArr[j] && !countSet.has(countArr[j])) {
                countSet.add(countArr[j]);
            }
        }
        if (countSet.size === 1) {
            return true;
        }
        countArr[i]++;
    }

    return false;
};
