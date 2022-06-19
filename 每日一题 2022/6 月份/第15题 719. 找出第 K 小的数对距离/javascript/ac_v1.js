/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    nums.sort((n1, n2) => n1 - n2);

    const binarySearch = (arr, end, target) => {
        let left = 0;
        let right = end;

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);

            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    };
    const length = nums.length;
    let left = 0;
    let right = nums[length - 1] - nums[0];
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        let count = 0;

        for (let i = 0; i < length; i++) {
            count += i - binarySearch(nums, i, nums[i] - mid);
        }
        if (count >= k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
