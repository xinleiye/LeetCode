/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let tail = num.length - 1;

    while (tail > 0 && num[tail] === "0") {
        tail--;
    }

    return num.substring(0, tail + 1);
};
