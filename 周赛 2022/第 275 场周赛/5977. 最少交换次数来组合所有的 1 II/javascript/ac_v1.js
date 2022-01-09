/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let res = nums.length;
    const total = nums.length;
    let oneCount = 0;
    const oneCountArr = new Array(nums.length).fill(0);

    nums.forEach((val, index) => {
        if (val === 1) {
            oneCount++;
        }
        oneCountArr[index] = oneCount;
    });
    if (oneCount === 0) {
        return 0;
    }

    let left = 1;
    let right = oneCount;

    res = Math.min(res, oneCount - oneCountArr[oneCount - 1]);
    while (right < total) {
        res = Math.min(res, oneCount - (oneCountArr[right] - oneCountArr[left - 1]));
        left++;
        right++;
    }
    left = total - oneCount + 1;
    right = 0;
    while (right < oneCount) {
        res = Math.min(res, oneCount - (oneCountArr[right] + oneCountArr[total - 1] - oneCountArr[left - 1]));
        left++;
        right++;
    }

    return res;
};
