/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const charArr = s.split("");
    const length = s.length;
    const halfK = Math.floor(k / 2);
    let index = 0;

    while (index < length) {
        for (let i = 0; i < halfK; i++) {
            if (index + i < length) {
                const tmpChar = s[index + i];

                charArr[index + i] = charArr[index + k - 1 - i];
                charArr[index + k - 1 - i] = tmpChar;
            }
        }
        index += k * 2;
    }

    return charArr.join("");
};
