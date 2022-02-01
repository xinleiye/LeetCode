/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    const length = s.length;
    let maxIndex = 0;
    let maxLen = 0;

    for (let i = 0; i < length; i++) {
        let lower = 0;
        let upper = 0;

        for (let j = i; j < length; j++) {
            if (s[j] >= "a" && s[j] <= "z") {
                lower |= 1 << (s.charCodeAt(j) - 97);
            }
            if (s[j] >= "A" && s[j] <= "Z") {
                upper |= 1 << (s.charCodeAt(j) - 65);
            }
            if (lower === upper && (j - i + 1) > maxLen) {
                maxIndex = i;
                maxLen = j - i + 1;
            }
        }
    }

    return s.substr(maxIndex, maxLen);
};
