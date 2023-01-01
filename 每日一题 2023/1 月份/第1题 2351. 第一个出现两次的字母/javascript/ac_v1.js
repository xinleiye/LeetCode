/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const chArr = new Array(26).fill(0);

    for (const ch of s) {
        const index = ch.charCodeAt() - 97;

        if (chArr[index]) {
            return ch;
        } else {
            chArr[index]++;
        }
    }
};
