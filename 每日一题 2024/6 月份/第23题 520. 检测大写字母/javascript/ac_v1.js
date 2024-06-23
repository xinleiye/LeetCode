/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let upper = 0;
    let lower = 0;

    for (const ch of word) {
        if (ch >= "A" && ch <= "Z") {
            upper++;
        } else if (ch >= "a" && ch <= "z") {
            lower++;
        }
    }
    if (upper === 1) {
        return word[0] >= "A" && word[0] <= "Z";
    }
    if (upper === word.length || lower === word.length) {
        return true;
    }

    return false;
};
