/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let res = nums.slice();
    let mergeSort = (arr, l, r) => {
        let count = 0;
        let mid = (l + r) >>> 1;
        let i = l;
        let j = mid + 1;
        let buffer;

        if (l >= r) {
            return;
        }

        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);

        buffer = new Array(r - l + 1).fill(0);

        while (i <= mid && j <= r) {
            if (arr[i] < arr[j]) {
                buffer[count] = arr[i++];
            } else {
                buffer[count] = arr[j++];
            }
            count++;
        }
        while (i <= mid) {
            buffer[count] = arr[i++];
            count++;
        }
        while (j <= r) {
            buffer[count] = arr[j++];
            count++;
        }

        for (let k = 0, len = r - l + 1; k < len; k++) {
            res[l + k] = buffer[k];
        }
    };

    mergeSort(res, 0, res.length - 1);

    return res;
};
