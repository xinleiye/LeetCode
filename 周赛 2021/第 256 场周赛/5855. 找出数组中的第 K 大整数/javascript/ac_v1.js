/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    nums.sort((item1, item2) => {
        const len1 = item1.length;
        const len2 = item2.length;
        
        if (len1 > len2) {
            return -1;
        } else if (len1 < len2) {
            return 1;
        } else {
            if (item1 > item2) {
                return -1;
            } else if (item1 < item2) {
                return 1;
            } else {
                return 0;
            }
        }
    });

    return nums[k - 1];
};
