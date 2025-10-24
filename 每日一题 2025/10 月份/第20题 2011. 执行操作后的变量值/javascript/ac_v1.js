/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res = 0;

    for (const op of operations) {
        if (op[1] === "+") {
            res++;
        } else {
            res--;
        }
    }

    return res;
};
