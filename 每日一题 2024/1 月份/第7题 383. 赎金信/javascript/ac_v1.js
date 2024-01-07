/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const charCount = new Array(26).fill(0);

    for (const ch of ransomNote) {
        charCount[ch.charCodeAt() - 97]++;
    }
    for (const ch of magazine) {
        charCount[ch.charCodeAt() - 97]--;
    }
    for (const c of charCount) {
        if (c > 0) {
            return false;
        }
    }

    return true;
};
