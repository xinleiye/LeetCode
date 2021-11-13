/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let upperCaseCount = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] >= 'A' && word[i] <= 'Z') {
            upperCaseCount++;
        }
    }

    if (upperCaseCount === word.length ||upperCaseCount === 0) {
        return true;
    } else if (upperCaseCount === 1) {
        return word[0] < 'Z';
    } else  {
        return false;
    }
};
