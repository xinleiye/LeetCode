/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(nums1, nums2) {
    const total = nums1.length;
    let swap = 1;
    let noSwap = 0;

    for (let i = 1; i < total; i++) {
        const swapTemp = swap;
        const noSwapTemp = noSwap;

        swap = total;
        noSwap = total;
        if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
            swap = swapTemp + 1;
            noSwap = noSwapTemp;
        }
        if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
            swap = Math.min(swap, noSwapTemp + 1);
            noSwap = Math.min(noSwap, swapTemp);
        }
    }

    return Math.min(swap, noSwap);
};
