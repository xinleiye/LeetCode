/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let res = 0;
    const row = strs.length;
    const col = strs[0].length;
    const group = new Array(strs.length).fill(false);

    for (let i = 0; i < col; i++) {
        let valid = true;

        for (let j = 1; j < row; j++) {
            if (!group[j] && strs[j][i] < strs[j - 1][i]) {
                valid = false;
                break;
            }
        }
        if (valid) {
            for (let j = 1; j < row; j++) {
                if (strs[j][i] > strs[j - 1][i]) {
                    group[j] = true;
                }
            }
        } else {
            res++;
        }
    }

    return res;
};
