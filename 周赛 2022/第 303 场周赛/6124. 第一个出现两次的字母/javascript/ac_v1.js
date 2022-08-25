/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const chArr = new Array(26).fill(0);
    
    for (const ch of s) {
        const index = ch.charCodeAt() - 97;

        chArr[index]++;
        if (chArr[index] === 2) {
            return ch;
        }
    }
};
