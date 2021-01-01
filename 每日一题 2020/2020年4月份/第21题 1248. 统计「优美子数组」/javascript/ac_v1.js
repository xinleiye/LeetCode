/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let res = 0;
    let oddArr = [-1];

    nums.forEach((val, index) => {
        if (val % 2 === 1) {
            oddArr.push(index);
        }
    });

    oddArr.push(nums.length);

    for (let i = 1, len = oddArr.length; i + k < len; i++) {
        res += (oddArr[i] - oddArr[i - 1]) * (oddArr[i + k] - oddArr[i + k - 1]);
    }

    return res;
};
