/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    const total = words.length;
    const length = words[0].length;
    let wordDiffs = [];
    let diffIndex = -1;

    for (const w of words) {
        const curDiff = new Array(length - 1);

        for (let i = 1; i < length; i++) {
            curDiff[i - 1] = w.charCodeAt(i) - w.charCodeAt(i - 1);
        }
        wordDiffs.push(curDiff.join(","));
    }
    for (let i = 2; i < total; i++) {
        diffIndex = getDiffIndex(wordDiffs, i, i - 1, i - 2);
        if (diffIndex !== -1) {
            return words[diffIndex];
        }
        diffIndex = getDiffIndex(wordDiffs, i - 1, i, i - 2);
        if (diffIndex !== -1) {
            return words[diffIndex];
        }
        diffIndex = getDiffIndex(wordDiffs, i - 2, i - 1, i);
        if (diffIndex !== -1) {
            return words[diffIndex];
        }
    }
};

function getDiffIndex(arr, index1, index2, index3) {
    if (arr[index1] !== arr[index2] && arr[index2] === arr[index3]) {
        return index1;
    }
    return -1;
}
