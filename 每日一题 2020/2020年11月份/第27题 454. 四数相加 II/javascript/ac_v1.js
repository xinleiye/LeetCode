/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let res = 0;
    let sumAB = new Map();

    A.forEach(itemA => {
        B.forEach(itemB => {
            let sum = itemA + itemB;

            if (sumAB.has(sum)) {
                sumAB.set(sum, sumAB.get(sum) + 1);
            } else {
                sumAB.set(sum, 1);
            }
        });
    });

    C.forEach(itemC => {
        D.forEach(itemD => {
            let diff = 0 - itemC - itemD;

            if (sumAB.has(diff)) {
                res += sumAB.get(diff);
            }
        });
    });

    return res;
};
