/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    let res = 0;
    let left = 0;

    while (left + 2 < A.length) {
        let right = left + 1;

        if (A[left] >= A[left + 1]) {
            left++;
            continue;
        }
        // 爬山
        while (right + 1 < A.length && A[right] < A[right + 1]) {
            right++;
        }
        // 下山
        if (A[right] > A[right + 1]) {
            while (right + 1 < A.length && A[right] > A[right + 1]) {
                right++;
            }
            // 到山脚
            res = Math.max(res, right - left + 1);
        }
        left = right;
    }

    return res;
};
