/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    let res = 0;

    for (let i = 0, len1 = guess.length, len2 = answer.length; i < len1 && i < len2; i++) {
        if (guess[i] === answer[i]) {
            res++;
        }
    }
    return res;
};
