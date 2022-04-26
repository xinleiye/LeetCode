/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let res = [];
    const sentenceWords = sentence.split(" ");
    const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const total = sentenceWords.length;

    for (let i = 0; i < total; i++) {
        const chars = sentenceWords[i].split("");

        if (vowel.indexOf(chars[0]) === -1) {
            chars.push(chars.shift());
        }
        chars.push("ma");
        for (let j = 0; j <= i; j++) {
            chars.push("a");
        }
        res.push(chars.join(""));
    }

    return res.join(" ");
};
