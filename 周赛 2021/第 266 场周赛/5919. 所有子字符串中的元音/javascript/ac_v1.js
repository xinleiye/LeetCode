/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function(word) {
    let res = 0;
    const length = word.length;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const isVowelChar = (ch) => {
        return vowels.indexOf(ch) >= 0;
    };
    const buff = new Array(word.length + 1).fill(0);

    for (let i = 0; i < length; i++) {
        if (isVowelChar(word[i])) {
            buff[i + 1] = i + 1 + buff[i];
        } else {
            buff[i + 1] = buff[i];
        }
    }

    buff.forEach(val => {
        res += val;
    });

    return res;
};
