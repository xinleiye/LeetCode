/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const res = [];
    const words = text.split(" ");
    let p1 = 0;
    let p2 = 1;

    while (p2 < words.length - 1) {
        if (words[p1] === first && words[p2] === second) {
            res.push(words[p2 + 1]);
        }
        p1++;
        p2++;
    }

    return res;
};
