/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let res = 0;
    const arr = nums.slice();

    while (arr.length > 1) {
        let isValid = true;
        let minSum = Infinity;
        let index = -1;
        const total = arr.length;

        for (let i = 0; i < total - 1; i++) {
            const sum = arr[i] + arr[i + 1];

            if (arr[i] > arr[i + 1]) {
                isValid = false;
            }
            if (sum < minSum) {
                minSum = sum;
                index = i;
            }
        }
        if (isValid) {
            break;
        }
        res++;
        arr[index] = minSum;
        arr.splice(index + 1, 1);
    }

    return res;
};
