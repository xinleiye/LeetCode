/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const charArr = word.split("");

    for (let i = 0; i < charArr.length; i++) {
        if (charArr[i] === ch) {
            let left = 0;
            let right = i;

            while (left < right) {
                const tmp = charArr[left];

                charArr[left] = charArr[right];
                charArr[right] = tmp;
                left++;
                right--;
            }
            break;
        }
    }

    return charArr.join("");
};
