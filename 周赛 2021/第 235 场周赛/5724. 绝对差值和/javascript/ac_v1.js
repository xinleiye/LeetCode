/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var minAbsoluteSumDiff = function(nums1, nums2) {
    let res = 0;
    const diffs = new Array(nums1.length);
    const length = nums1.length;
    let maxDiff = 0;
    let maxDiffIndex = [];
    const mod = 1e9 + 7;
    let minDiff = 1e5;
    
    for (let i = 0; i < length; i++) {
        const diff = Math.abs(nums1[i] - nums2[i]);

        diffs[i] = diff;
        if (diff > maxDiff) {
            maxDiff = diff;
            maxDiffIndex = [i];
        } else if (diff === maxDiff) {
            maxDiffIndex.push(i);
        }
    }

    nums1.sort((val1, val2) => {
        return val1 - val2;
    });

    maxDiffIndex.forEach(val => {
        const index = binarySearch(nums1, nums2[val]);
        let diff = Math.abs(nums1[index] - nums2[val]);

        if (diff < minDiff) {
            minDiff = diff;
        }
        if (index > 0) {
            diff = Math.abs(nums1[index - 1] - nums2[val]);
            if (diff < minDiff) {
                minDiff = diff;
            }
        }
    });

    diffs.forEach(val => {
        res = (res + val) % mod;
    });

    return res - maxDiff + minDiff;
};

function binarySearch (arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = (left + right) >>> 1;

        if (arr[mid] > target) {
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return left;
}
