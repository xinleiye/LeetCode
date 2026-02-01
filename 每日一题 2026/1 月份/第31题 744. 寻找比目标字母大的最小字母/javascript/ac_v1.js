/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let res = letters[0];

    for (const c of letters) {
        if (c > target) {
            res = c;
            break;
        }
    }

    return res;
};
