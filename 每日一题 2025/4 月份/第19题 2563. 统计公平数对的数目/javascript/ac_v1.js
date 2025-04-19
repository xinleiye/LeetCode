/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    nums.sort((n1, n2) => n1 - n2);

    return countRightUpper(nums, upper) - countRightUpper(nums, lower - 1);
};

function countRightUpper (arr, upper) {
    let count = 0;
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum <= upper) {
            count += right - left;
            left++;
        } else {
            right--;
        }
    }

    return count;
}
