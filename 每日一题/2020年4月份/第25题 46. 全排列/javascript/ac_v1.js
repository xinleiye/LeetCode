/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let visited = new Array(nums.length).fill(false);
    let getNums = (src, output, flag, len, arrs) => {
        if (arrs.length === len) {
            output.push(arrs.slice());
            return;
        }

        for (let i = 0; i < visited.length; i++) {
            if (visited[i] === false) {
                visited[i] = true;
                arrs.push(src[i]);
                getNums(src, output, visited, len, arrs);
                arrs.pop(src[i]);
                visited[i] = false;
            }
        }
    };

    getNums(nums, res, visited, nums.length, []);

    return res;
};
