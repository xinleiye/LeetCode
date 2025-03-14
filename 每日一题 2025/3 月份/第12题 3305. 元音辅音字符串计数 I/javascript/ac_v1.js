/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
    return substringCount(word, k) - substringCount(word, k + 1);
};

function substringCount(str, length) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;
    const vowelMap = new Map();
    let consonants = 0;
    const total = str.length;
    let left = 0;
    let right = 0;

    while (left < total) {
        while (right < total && (consonants < length || vowelMap.size < 5)) {
            const ch = str[right];

            if (vowels.has(ch)) {
                vowelMap.set(ch, (vowelMap.get(ch) || 0) + 1);
            } else {
                consonants++;
            }
            right++;
        }
        if (consonants >= length && vowelMap.size === 5) {
            count += total - right + 1;
        }
        if (vowels.has(str[left])) {
            const num = vowelMap.get(str[left]);

            if (num === 1) {
                vowelMap.delete(str[left]);
            } else {
                vowelMap.set(str[left], num - 1);
            }
        } else {
            consonants--;
        }
        left++;
    }

    return count;
}
