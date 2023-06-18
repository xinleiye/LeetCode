/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function(s) {
    const total = s.length;
    const chars = s.split("");
    let index = 0;

    while (index < total && chars[index] === "a") {
        index++;
    }
    if (index === total) {
        chars[total - 1] = "z";
    }
    while (index < total && chars[index] !== "a") {
        chars[index] = String.fromCharCode(s.charCodeAt(index) - 1);
        index++;
    }

    return chars.join("");
};
