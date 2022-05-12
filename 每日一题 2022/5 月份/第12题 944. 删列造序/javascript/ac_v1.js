/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let res = 0;
    const maxRow = strs.length;
    const maxCol = strs[0].length;

    for (let i = 0; i < maxCol; i++) {
        let pre = strs[0][i];

        for (let j = 1; j < maxRow; j++) {
            if (strs[j][i] < pre) {
                res++;
                break;
            } else {
                pre = strs[j][i];
            }
        }
    }

    return res;
};
