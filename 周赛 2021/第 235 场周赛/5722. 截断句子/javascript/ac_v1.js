/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    let res = "";
    let count = 0;
    let index = 0;

    while (count < k) {
        if (s[index] !== " ") {
            res += s[index];
        }
        if (s[index] === " " || index === s.length - 1) {
            res += " ";
            count++;
        }
        index++;
    }

    return res.trim();
};
