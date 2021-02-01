/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    const getSum = (preVal, curVal) => {
        return preVal + curVal;
    };
    const diff = (A.reduce(getSum) - B.reduce(getSum)) / 2;
    const setA = new Set();

    A.forEach(item => {
        if (!setA.has(item)) {
            setA.add(item);
        }
    });
    for (let i = 0; i < B.length; i++) {
        const target = B[i] + diff;

        if (setA.has(target)) {
            return [target, B[i]];
        }
    }
};
