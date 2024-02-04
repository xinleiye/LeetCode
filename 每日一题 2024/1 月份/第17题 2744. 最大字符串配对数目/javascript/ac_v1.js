/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let res = 0;
    const total = words.length;
    const matched = new Array(total).fill(false);

    for (let i = 0; i < total; i++) {
        if (!matched[i]) {
            for (let j = i + 1; j < total; j++) {
                if (words[i] === words[j][1] + words[j][0]) {
                    res++;
                    matched[i] = true;
                    matched[j] = true;
                }
            }
        }
    }

    return res;
};
