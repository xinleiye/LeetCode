/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    const chars = s.split("");

    for (let i = 0; i < s.length; i++) {
        if (chars[i] >= "A" && chars[i] <= "Z") {
            chars[i] = String.fromCharCode(s.charCodeAt(i) + 32);
        }
    }

    return chars.join("");
};
