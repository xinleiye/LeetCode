/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    let charNum = new Array(26).fill(0);
    const length = sentence.length;

    for (let i = 0; i < length; i++) {
        charNum[sentence.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
        if (charNum[i] === 0) {
            return false;
        }
    }

    return true;
};
