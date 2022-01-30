/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const res = [];
    const words1 = s1.split(" ");
    const words2 = s2.split(" ");
    const word1Map = new Map();
    const word2Map = new Map();
    const add2Map = (map, word) => {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    };

    words1.forEach(word => {
        add2Map(word1Map, word);
    });
    words2.forEach(word => {
        add2Map(word2Map, word);
    });
    word1Map.forEach((count, word) => {
        if (count === 1 && !word2Map.has(word)) {
            res.push(word);
        }
    });
    word2Map.forEach((count, word) => {
        if (count === 1 && !word1Map.has(word)) {
            res.push(word);
        }
    });

    return res;
};
