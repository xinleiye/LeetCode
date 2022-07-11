/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    let res = 0;
    const total = arr.length;
    const binarySearch = (arr, left, right, target) => {
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (arr[mid] < target) {
                left = mid + 1;
            } else if (arr[mid] > target) {
                right = mid - 1;
            } else {
                return mid;
            }
        }

        return -1;
    };

    for(let i = 0; i < total; i++) {
        for (let j = i + 1; j < total; j++) {
            const stack = [arr[i], arr[j]];
            let index = binarySearch(arr, j + 1, total - 1, stack[0] + stack[1]);

            while (index > -1) {
                stack.push(arr[index]);
                index = binarySearch(arr, index + 1, total - 1, stack[stack.length - 1] + stack[stack.length - 2])
            }
            if (stack.length > 2) {
                res = Math.max(res, stack.length);
            }
        }
    }

    return res;
};
