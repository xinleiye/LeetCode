/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const queryNum = l.length;
    const res = new Array(queryNum);

    for (let i = 0; i < queryNum; i++) {
        const right = r[i];
        const subNums = [];
        let valid = true;

        for (let j = l[i]; j <= right; j++) {
            subNums.push(nums[j]);
        }
        subNums.sort((n1, n2) => n1 - n2);
        for (let j = subNums.length - 1; j > 0; j--) {
            if (subNums[j] - subNums[j - 1] !== subNums[1] - subNums[0]) {
                valid = false;
                break;
            }
        }
        res[i] = valid;
    }

    return res;
};
