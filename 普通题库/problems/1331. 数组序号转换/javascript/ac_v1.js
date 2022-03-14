/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const res = new Array(arr.length);
    const numIndexMap = new Map();
    const arrCopy = arr.slice();

    arrCopy.sort((n1, n2) => n1 - n2).forEach(n => {
        if (!numIndexMap.has(n)) {
            numIndexMap.set(n, numIndexMap.size + 1);
        } else {
            numIndexMap.set(n, numIndexMap.get(n));
        }
    });
    arr.forEach((n, index) => {
        res[index] = numIndexMap.get(n);
    });

    return res;
};
