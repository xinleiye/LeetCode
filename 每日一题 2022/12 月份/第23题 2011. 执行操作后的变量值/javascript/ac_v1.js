/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res = 0;
    const opStraegy = {
        "++X": add1,
        "X++": add1,
        "--X": minus1,
        "X--": minus1
    };

    for (const op of operations) {
        res = opStraegy[op](res);
    }

    return res;
};

function add1 (num) {
    return num + 1;
}

function minus1 (num) {
    return num - 1;
}
