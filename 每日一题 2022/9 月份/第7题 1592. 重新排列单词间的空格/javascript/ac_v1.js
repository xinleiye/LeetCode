/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let spaceCount = 0;
    let word = "";
    const words = [];

    for (const ch of text) {
        if (ch === " ") {
            spaceCount++;
            if (word.length) {
                words.push(word);
                word = "";
            }
        } else {
            word += ch;
        }
    }
    if (word.length) {
        words.push(word);
    }
    if (words.length === 1) {
        return words[0] + " ".repeat(spaceCount);
    } else {
        return words.join(" ".repeat(Math.floor(spaceCount / (words.length - 1)))) + " ".repeat(spaceCount % (words.length - 1));
    }
};
