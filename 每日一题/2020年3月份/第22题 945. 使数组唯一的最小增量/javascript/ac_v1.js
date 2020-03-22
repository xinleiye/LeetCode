/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let res = 0;
    let countA = new Array(80000).fill(0);
    let repeatNum = 0;

    A.forEach((val) => {
        countA[val]++;
    });

    countA.forEach((val, index) => {
        if (val > 1) {
            res -= index * (val - 1);
            repeatNum += val - 1;
        } else if (repeatNum > 0 && val === 0) {
            res += index;
            repeatNum--;
        }
    });

    return res;
};
