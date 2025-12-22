/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let res = 0;
    let row = strs.length;
    let col = strs[0].length;

    for (let i = 0; i < col; i++) {
        for (let j = 1; j < row; j++) {
            if (strs[j][i] < strs[j - 1][i]) {
                res++;
                break;
            }
        }
    }

    return res;
};
