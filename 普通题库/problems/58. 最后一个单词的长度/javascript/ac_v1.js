/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let res = 0;
    let index = s.length - 1;

    while (index >= 0 && s[index] === " ") {
        index--;
    }
    while (index >= 0 && s[index] !== " ") {
        res++;
        index--;
    }

    return res;
};
