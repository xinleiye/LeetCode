/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
    let left = Math.min(...nums);
    let right = Math.max(...nums);

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        let visited = false;

        for (const x of nums) {
            if (x <= mid && !visited) {
                count++;
                visited = true;
            } else {
                visited = false;
            }
        }
        if (count >= k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
