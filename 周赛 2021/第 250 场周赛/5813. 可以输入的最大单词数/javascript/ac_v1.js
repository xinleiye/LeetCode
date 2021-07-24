/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let res = 0;
    const words = text.split(" ");
    const bl = new Array(26).fill(false);

    for (let i = 0, len = brokenLetters.length; i < len; i++) {
        bl[brokenLetters.charCodeAt(i) - 97] = true;
    }

    words.forEach(word => {
        let valid = true;

        for (let i = 0, len = word.length; i < len; i++) {
            if (bl[word.charCodeAt(i) - 97]) {
                valid = false;
                break;
            }
        }
        if (valid) {
            res++;
        }
    });

    return res;
};
