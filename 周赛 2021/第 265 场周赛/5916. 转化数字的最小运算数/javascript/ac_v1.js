/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minimumOperations = function(nums, start, goal) {
    const length = nums.length;
    const queue = [];
    const visited = new Array(1001).fill(false);
    const ops = [
        (num1, num2) => num1 + num2,
        (num1, num2) => num1 - num2,
        (num1, num2) => num1 ^ num2,
    ];

    queue.push([start, 0]);
    visited[start] = true;
    while (queue.length) {
        const [num, step] = queue.shift();

        for (let i = 0; i < length; i++) {
            for (let op of ops) {
                const newNum = op(num, nums[i]);

                if (newNum === goal) {
                    return step + 1;
                }
                if (newNum >= 0 && newNum <= 1000 && !visited[newNum]) {
                    visited[newNum] = true;
                    queue.push([newNum, step + 1]);
                }
            }
        }
    }

    return -1;
};
