/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let res = [];
    let depth = 0;

    for (let i = 0, len = seq.length; i < len; i++) {
        if (seq[i] === "(") {
            depth++;
            res[i] = depth % 2;
        } else if (seq[i] === ")") {
            res[i] = depth % 2;
            depth--;
        }
    }

    return res;
};
