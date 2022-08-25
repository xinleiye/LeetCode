/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
var sequenceReconstruction = function(nums, sequences) {
    const length = nums.length;
    const indegress = new Array(length + 1).fill(0);
    const graph = new Array(length + 1).fill(0).map(() => new Set());
    const queue = [];

    for (const s of sequences) {
        for (let i = 1, len = s.length; i < len; i++) {
            graph[s[i - 1]].add(s[i]);
            indegress[s[i]]++;
        }
    }
    for (let i = 1; i <= length; i++) {
        if (indegress[i] === 0) {
            queue.push(i);
        }
    }
    while (queue.length) {
        if (queue.length > 1) {
            return false;
        }

        const cur = queue.shift();
        const nextSet = graph[cur];

        for (const next of nextSet) {
            indegress[next]--;
            if (indegress[next] === 0) {
                queue.push(next);
            }
        }
    }

    return true;
};
