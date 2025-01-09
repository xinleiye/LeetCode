/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function(word1, word2) {
    let res = 0;
    const length1 = word1.length;
    const length2 = word2.length;
    let left = 0;
    let right = 0;
    const wordArr1 = new Array(26).fill(0);
    const wordArr2 = new Array(26).fill(0);

    for (const ch of word2) {
        wordArr2[ch.charCodeAt(0) - 97]++;
    }
    while (left <= length1 - length2) {
        while (right < length1 && !check(wordArr1, wordArr2)) {
            wordArr1[word1.charCodeAt(right) - 97]++;
            right++;
        }
        if (check(wordArr1, wordArr2)) {
            res += length1 - right + 1;
        }
        wordArr1[word1.charCodeAt(left) - 97]--;
        left++;
    }

    return res;
};

function check(arr1, arr2) {
    const length = arr1.length;

    for (let i = 0; i < length; i++) {
        if (arr1[i] < arr2[i]) {
            return false;
        }
    }

    return true;
}
