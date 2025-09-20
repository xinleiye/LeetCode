/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let res = 0;
    const words = text.split(" ");
    const broken = new Set(brokenLetters.split(""));

    for (const w of words) {
        let valid = true;

        for (const ch of w) {
            if (broken.has(ch)) {
                valid = false;
                break;
            }
        }
        if (valid) {
            res++;
        }
    }

    return res;
};
