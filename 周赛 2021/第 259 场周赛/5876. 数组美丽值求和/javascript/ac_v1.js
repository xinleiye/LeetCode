/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
    let res = 0;
    const length = nums.length;
    const maxQ = new MaxPriorityQueue();
    const minQ = nums.slice(1);
    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = (left + right) >>> 1;

            if (arr[mid] > target) {
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    };
    const getMin = (arr, except) => {
        const index = binarySearch(arr, except);

        arr.splice(index, 1);

        return arr[0];
    };

    maxQ.enqueue(nums[0]);
    minQ.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 1; i < length - 1; i++) {
        const cur = nums[i];
        const max = maxQ.front().element;
        const min = getMin(minQ, cur);

        if (max < cur && min > cur) {
            res += 2;
        } else if (nums[i - 1] < cur && cur < nums[i + 1]) {
            res += 1;
        }
        maxQ.enqueue(cur);
    }

    return res;
};
