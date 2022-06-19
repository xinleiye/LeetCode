/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let res = -1;
    const lower = new Array(26).fill(0);
    const upper = new Array(26).fill(0);

    for (const ch of s) {
        if (ch >= "A" && ch <= "Z") {
            upper[ch.charCodeAt() - 65]++;
        } else {
            lower[ch.charCodeAt() - 97]++;
        }
    }
    for (let i = 0; i < 26; i++) {
        if (upper[i] > 0 && lower[i] > 0) {
            res = i;
        }
    }
    
    return res !== -1 ? String.fromCharCode(res + 65) : "";
};
