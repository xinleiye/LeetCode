/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let plus = 0;
    let minus = 0;

    operations.forEach(op => {
        if (op[1] === '+') {
            plus++;
        } else {
            minus++;
        }
    });

    return plus - minus;
};
