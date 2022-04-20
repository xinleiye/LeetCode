/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = [];
    const signs = [" ", "!", "?", "'", ",", ";", "."];
    const total = paragraph.length;
    paragraph = paragraph.toLowerCase();
    for (let i = 0; i < total;) {
        const s = i;
        let e = i;
        while (e < total && signs.indexOf(paragraph[e]) === -1) {
            e++;
        }
        console.log(s, e, paragraph.substring(s, e))
        if (s !== e) {
            words.push(paragraph.substring(s, e));
        }
        i = e + 1;
    }

    const wordsMap = new Map();
    for (const w of words) {
        if (wordsMap.has(w)) {
            wordsMap.set(w, wordsMap.get(w) + 1);
        } else {
            wordsMap.set(w, 1);
        }
    }

    let res = "";
    let max = 0;
    const bannedSet = new Set(banned);
    wordsMap.forEach((count, word) => {
        if (!bannedSet.has(word) && count > max) {
            res = word;
            max = count;
        }
    });

    return res;
};
