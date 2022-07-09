/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    let res = 0;
    const numMap = new Map();
    const total = arr.length;
    const buff = new Array(total).fill(0).map(() => new Array(total).fill(0));

    for (let i = 0; i < total; i++) {
        numMap.set(arr[i], i);
    }
    for (let i = 0; i < total; i++) {
        for (let j = i - 1; j >= 0; j--) {
            const diff = arr[i] - arr[j];

            if (diff >= arr[j]) {
                break;
            }
            if (numMap.has(diff)) {
                const index = numMap.get(diff);

                buff[i][j] = Math.max(buff[j][index] + 1, 3);
                res = Math.max(res, buff[i][j]);
            }
        }
    }

    return res;
};
