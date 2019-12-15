/**
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function(arr) {
    let res;
    let totalRow = arr.length;
    let totalCol = arr[0].length;
    let sums = new Array(totalCol);

    for (let i = 0; i < totalCol; i++) {
        sums[i] = arr[0][i];
    }

    for (let i = 1; i < totalRow; i++) {
        let tmpSums = new Array(totalCol);

        // 第 i 列中的每个值
        for (let j = 0; j < totalCol; j++) {
            let min = 200;

            // sums中的每个值
            for (let k = 0; k < totalCol; k++) {
                let sum = sums[k] + arr[i][j];

                if (j === k) {
                    continue;
                }
                min = min > sum ? sum : min;
            }
            tmpSums[j] = min;
        }
        sums = tmpSums;
    }

    res = sums[0];
    for (let i = 1; i < sums.length; i++) {
        res = res > sums[i] ? sums[i] : res;
    }

    return res;
};
