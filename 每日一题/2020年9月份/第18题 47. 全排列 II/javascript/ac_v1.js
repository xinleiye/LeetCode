/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    let index = 0;
    let visited = new Array(nums.length);
    let numStack = [];
    let dfs = () => {
        if (numStack.length === nums.length) {
            res.push(numStack.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
                continue;
            }
            visited[i] = true;
            numStack.push(nums[i]);
            dfs();
            numStack.pop();
            visited[i] = false;
        }
    };

    nums.sort((val1, val2) => {
        return val1 - val2;
    });

    dfs();

    return res;
};
