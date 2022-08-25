/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let index = 0;
    let minDiff = Math.abs(arr[0] - x);
    const total = arr.length;
    const diffArr = new Array(total);
    for (let i = 0; i < total; i++) {
        const diff = Math.abs(arr[i] - x);

        if (diff < minDiff) {
            index = i;
            minDiff = diff;
        }
        diffArr[i] = diff;
    }

    const res = [arr[index]];
    let left = index - 1;
    let right = index + 1;
    while (res.length < k) {
        if (left >= 0 && right < total) {
            if (diffArr[left] <= diffArr[right]) {
                res.unshift(arr[left]);
                left--;
            } else {
                res.push(arr[right]);
                right++;
            }
        } else {
            if (left < 0) {
                res.push(arr[right]);
                right++;
            } else {
                res.unshift(arr[left]);
                left--;
            }
        }
    }

    return res;
};
