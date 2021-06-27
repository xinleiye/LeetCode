/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let subArr = [];
    const length = nums.length;
    let index = 0;

    while (index < length) {
        let arr = [];

        while ((index < length - 1) && (nums[index] < nums[index + 1])) {
            arr.push(nums[index]);
            index++;
        }
        arr.push(nums[index]);
        subArr.push(arr);
        index++;
    }

    if (subArr.length > 2) {
        return false;
    } else if (subArr.length === 1) {
        return true;
    } else {
        let arr1 = subArr[0];
        let arr2 = subArr[1];
        
        if (arr1.length === 1 || arr2.length === 1) {
            return true;
        } else {
            if ((arr1[arr1.length - 2] < arr2[0]) || (arr1[arr1.length - 1] < arr2[1])) {
                return true;
            } else {
                return false;
            }
        }
    }
};
