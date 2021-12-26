/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function(arr) {
    const res = new Array(arr.length).fill(0);
    const numIndexMap = new Map();

    arr.forEach((val, index) => {
        if (numIndexMap.has(val)) {
            numIndexMap.get(val).push(index);
        } else {
            numIndexMap.set(val, [index]);
        }
    });
    numIndexMap.forEach(indexs => {
        let preSum = new Array(indexs.length);
        const count = indexs.length;

        preSum[0] = indexs[0];
        for (let i = 1; i < count; i++) {
            preSum[i] = preSum[i - 1] + indexs[i];
        }
        res[indexs[0]] = preSum[count - 1] - indexs[0] * count;
        res[indexs[count - 1]] =  indexs[count - 1] * count - preSum[count - 1];
        for (let i = 1; i < count - 1; i++) {
            res[indexs[i]] = indexs[i] * i - preSum[i - 1] + preSum[count - 1] - preSum[i] - indexs[i] * (count - i - 1);
        }
    });
    
    return res;
};
