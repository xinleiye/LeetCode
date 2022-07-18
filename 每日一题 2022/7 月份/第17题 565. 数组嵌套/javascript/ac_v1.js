/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let res = 1;
    const length = nums.length;
    const visited = new Array(nums.length).fill(false);

    for (let i = 0; i < length; i++) {
        let count = 0;
        let next = i;

        while (!visited[next]) {
            visited[next] = true;
            count++;
            next = nums[next];
        }
        res = Math.max(res, count);
    }

    return res;
};
