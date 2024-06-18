/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function(sentence, discount) {
    const words = sentence.split(" ");
    const length = words.length;
    for (let i = 0; i < length; i++) {
        if (isPrice(words[i])) {
            words[i] = discountPrice(words[i], discount);
        }
    }
    return words.join(" ");
};

function isPrice(str) {
    if (str[0] !== "$" || str.length <= 1) {
        return false;
    }
    let index = 1;
    const total = str.length;
    while (index < total) {
        if (str[index] < "0" || str[index] > "9") {
            return false;
        }
        index++;
    }
    return true;
}

function discountPrice(str, discount) {
    return "$" + (Number(str.substring(1)) * (100 - discount) / 100).toFixed(2);
}
