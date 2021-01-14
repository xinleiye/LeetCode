/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    const length = A.length;
    let res = new Array(length);
    let preVal = 0;

    for (let i = 0; i < length; i++) {
        preVal = preVal * 2 + A[i];
        if (preVal % 5 === 0) {
            res[i] = true;
        } else {
            res[i] = false;
        }
        preVal = preVal % 5;
    }

    return res;
};
