/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const charArr = s.split("");
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && vowels.indexOf(charArr[left]) < 0) {
            left++;
        }
        while (right > left && vowels.indexOf(charArr[right]) < 0) {
            right--;
        }
        const tmpChar = charArr[left];

        charArr[left] = charArr[right];
        charArr[right] = tmpChar;
        left++;
        right--;
    }

    return charArr.join("");
};
