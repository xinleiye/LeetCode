/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let res = [];

    for (let i = 1, len = Math.floor(target / 2); i <= len; i++) {
        let sum = 1;
        let count = 2;

        while (sum < target) {
            // 首项为 i，项数为 count，公差为 1，的等差数列求和。
            sum = count * i + count * (count - 1) / 2;
            if (sum === target) {
                let arr = [];

                for (let j = 0; j < count; j++) {
                    arr.push(i + j);
                }
                res.push(arr);
            }
            count++;
        }
    }

    return res;
};
