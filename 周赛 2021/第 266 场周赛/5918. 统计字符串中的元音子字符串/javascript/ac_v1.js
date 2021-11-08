/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    let res = 0;
    const length = word.length;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const isValidVowelStr = (obj) => {
        for (let ch of vowels) {
            if (obj[ch] === 0) {
                return false;
            }
        }

        return true;
    };
    const isVowelChar = (ch) => {
        return vowels.indexOf(ch) >= 0;
    };

    for (let i = 0; i <= length - 5; i++) {
        const vowelCount = {
            a: 0,
            e: 0,
            i: 0,
            o: 0,
            u: 0,
        };

        for (let j = i; j < length; j++) {
            if (!isVowelChar(word[j])) {
                break;
            }
            vowelCount[word[j]]++;
            if (isValidVowelStr(vowelCount)) {
                res++;
            }
        }
    }

    return res;
};
