/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
    if (numFriends === 1) {
        return word;
    }

    let res = "";
    const total = word.length;
    const maxLength = word.length - numFriends + 1;
    for (let i = 0; i < total; i++) {
        const substr = word.substring(i, i + Math.min(maxLength, total - i));
        if (substr > res) {
            res = substr;
        }
    }

    return res;
};
