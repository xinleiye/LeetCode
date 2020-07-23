/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let res = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i - 1]) {
            res = numbers[i];
            break;
        }
    }

    return res;
};
