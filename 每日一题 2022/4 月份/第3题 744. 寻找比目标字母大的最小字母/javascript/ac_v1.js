/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const tarCode = target.charCodeAt(0);
    const srcCode = letters.map(ch => ch.charCodeAt(0));

    for (const code of srcCode) {
        if (code > tarCode) {
            return String.fromCharCode(code);
        }
    }

    return String.fromCharCode(srcCode[0]);
};
