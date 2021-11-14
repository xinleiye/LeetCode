/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function(s, queries) {
    let res = new Array(queries.length).fill(0);
    const plateSum = [];
    let index = 0;
    const sLen = s.length;
    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        
        while (left <= right) {
            const mid = (left + right) >>> 1;

            if (arr[mid].index < target) {
                left = mid + 1;
            } else if ((arr[mid].index > target)) {
                right = mid - 1;
            } else {
                return mid;
            }
        }
        
        return left;
    };

    while (s[index] === '*') {
        index++;
    }
    plateSum.push({
        index: index,
        count: 0,
    });
    while (index < sLen) {
        if (s[index] === '|') {
            let plate = plateSum[plateSum.length - 1].count;

            index++;
            while (index < sLen && s[index] === '*') {
                plate++;
                index++;
            }
            if (s[index] === '|') {
                plateSum.push({
                    index: index,
                    count: plate
                });
            }
        }
    }

    queries.forEach((q, index) => {
        let left = 0;
        let right = 0;

        left = binarySearch(plateSum, q[0]);
        if (s[q[1]] === '|') {
            right = binarySearch(plateSum, q[1]);
        } else {
            right = binarySearch(plateSum, q[1]) - 1;
        }

        if (right > left) {
            res[index] = plateSum[right].count - plateSum[left].count;
        }
    });

    return res;
};
