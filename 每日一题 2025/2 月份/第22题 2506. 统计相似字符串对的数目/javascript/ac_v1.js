 /**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let res = 0;
    const total = words.length;
    const sortedWords = words.map(w => Array.from(new Set(w.split(""))).sort().join("")).sort();
    let count = 1;
    let pos = 1;

    while (pos < total) {
        while (pos < total && sortedWords[pos] === sortedWords[pos - 1]) {
            count++;
            pos++;
        }
        res += (count - 1) * count / 2;
        count = 1;
        pos++;
    }

    return res;
};
