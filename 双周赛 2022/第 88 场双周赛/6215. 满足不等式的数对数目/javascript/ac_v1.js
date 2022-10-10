/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} diff
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, diff) {
    const total = nums1.length;
    const diffArr = new Array(nums1.length);
    for (let i = 0; i < total; i++) {
        diffArr[i] = nums1[i] - nums2[i];
    }

    return mergeSort(diffArr, diff);
};

function mergeSort(arr, diff) {
    const total = arr.length;
    if (total <= 1) {
        return 0;
    }

    const mid = total >>> 1;
    const preArr = arr.slice(0, mid);
    const nextArr = arr.slice(mid);
    let count = mergeSort(preArr, diff) + mergeSort(nextArr, diff);
    let curCount = 0;
    for (const n of nextArr) {
        while (curCount < preArr.length && preArr[curCount] <= n + diff) {
            curCount++;
        }
        count += curCount;
    }

    let index = 0;
    let preIndex = 0;
    let nextIndex = 0;
    while (index < total) {
        if (preIndex >= preArr.length) {
            arr[index] = nextArr[nextIndex];
            nextIndex++;
        } else if (nextIndex >= nextArr.length) {
            arr[index] = preArr[preIndex];
            preIndex++;
        } else {
            if (preArr[preIndex] < nextArr[nextIndex]) {
                arr[index] = preArr[preIndex];
                preIndex++;
            } else {
                arr[index] = nextArr[nextIndex];
                nextIndex++;
            }
        }
        index++;
    }

    return count;
}
