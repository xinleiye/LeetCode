/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let res = "0";
    const total = number.length;

    for (let i = 0; i < total; i++) {
        if (number[i] === digit) {
            const newNumber = number.substr(0, i) + number.substr(i + 1, total);

            if (newNumber > res) {
                res = newNumber;
            }
        }
    }

    return res;
};
