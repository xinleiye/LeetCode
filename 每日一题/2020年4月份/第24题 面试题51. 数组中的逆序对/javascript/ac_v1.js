/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let sorted = nums.slice();
    let mergeSort = (tarBuf, start, end) => {
        let mid;
        let left;
        let right;
        let buff;
        let count = 0;
        let index = 0;

        if (start >= end) {
            return 0;
        }

        mid = (start + end) >>> 1;

        count = mergeSort(tarBuf, start, mid) + mergeSort(tarBuf, mid + 1, end);

        left = start;
        right = mid + 1;
        buff = new Array(end - start + 1);
        while (left <= mid && right <= end) {
            if (tarBuf[left] <= tarBuf[right]) {
                buff[index++] = tarBuf[left++];
                count += right - mid - 1;
            } else {
                buff[index++] = tarBuf[right++];
            }
        }
        while (left <= mid) {
            buff[index++] = tarBuf[left++];
            count += right - mid - 1
        }
        while (right <= end) {
            buff[index++] = tarBuf[right++];
        }

        for (let i = 0, len = end - start + 1; i < len; i++) {
            tarBuf[i + start] = buff[i];
        }

        return count;
    };

    return mergeSort(sorted, 0, nums.length - 1);
};
