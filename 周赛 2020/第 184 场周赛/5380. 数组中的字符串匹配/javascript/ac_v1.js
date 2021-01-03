/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let res = [];
    let length = words.length;

    words.sort((val1, val2) => {
        return val1.length - val2.length;
    });

    for (let i = 0, len = length - 1; i < len; i++) {
        for (let j = i + 1; j < length; j++) {
            if (words[j].indexOf(words[i]) >= 0) {
                res.push(words[i]);
                break;
            }
        }
    }

    return res;
};
