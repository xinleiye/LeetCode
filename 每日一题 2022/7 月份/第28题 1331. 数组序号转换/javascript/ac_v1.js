/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const total = arr.length;
    const res = new Array(total);
    const sortIndex = new Array(total);

    for (let i = 0; i < total; i++) {
        sortIndex[i] = i;
    }
    sortIndex.sort((i1, i2) => arr[i1] - arr[i2]);

    let index = 1;
    for (let i = 0; i < total; i++) {
        if (i > 0 && arr[sortIndex[i]] !== arr[sortIndex[i - 1]]) {
            index++;
        }
        res[sortIndex[i]] = index;
    }

    return res;
};
