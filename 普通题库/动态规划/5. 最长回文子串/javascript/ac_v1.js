/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = "";
    let length = new Array(s.length);

    for (let i = 0, len = length.length; i < len; i++) {
        length[i] = new Array(s.length);
    }

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if (i + 1 > j - 1) {
                length[i][j] = s[i] === s[j];
            } else {
                length[i][j] = length[i + 1][j - 1] && (s[i] === s[j]);
            }
            if (length[i][j] && (j - i + 1 > res.length)) {
                res = s.slice(i, j + 1);
            }
        }
    }

    return res;
};
