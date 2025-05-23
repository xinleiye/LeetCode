/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {
    const total = nums.length;
    const map = Array.from({ length: total }, () => []);

    for (const [s, e] of edges) {
        map[s].push(e);
        map[e].push(s);
    }

    return dfsSearch(map, 0, -1, nums, k)[0];
};

function dfsSearch(map, cur, pre, values, k) {
    let d0 = 0;
    let d1 = -Infinity;

    for (const n of map[cur]) {
        if (n !== pre) {
            const [r0, r1] = dfsSearch(map, n, cur, values, k);
            let tmp = Math.max(d1 + r0, d0 + r1);

            d0 = Math.max(d0 + r0, d1 + r1);
            d1 = tmp;
        }
    }

    return [Math.max(d0 + values[cur], d1 + (values[cur] ^ k)), Math.max(d1 + values[cur], d0 + (values[cur] ^ k))];
}
