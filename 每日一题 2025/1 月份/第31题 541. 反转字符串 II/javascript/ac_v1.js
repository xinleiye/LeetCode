/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const chars = s.split("");
    let index = 0;
    const total = s.length;

    while (index < total) {
        const right = Math.min(k, total - index);

        for (let i = 0; i < right >>> 1; i++) {
            const tmp = chars[index + i];

            chars[index + i] = chars[index - i + right - 1];
            chars[index - i + right - 1] = tmp;
        }
        index += k * 2;
    }

    return chars.join("");
};
