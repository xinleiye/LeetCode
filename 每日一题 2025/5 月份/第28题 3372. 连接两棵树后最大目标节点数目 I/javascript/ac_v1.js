/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2, k) {
    const total1 = edges1.length + 1;
    const total2 = edges2.length + 1;
    const res = new Array(total1).fill(0);
    const count1 = new Array(total1).fill(0);
    const count2 = new Array(total2).fill(0);
    const map1 = new Map();
    const map2 = new Map();
    let maxCount2 = 0;
    genMap(map1, edges1);
    genMap(map2, edges2);
    for (let i = 0; i < total1; i++) {
        count1[i] = dfsSearch(map1, i ,-1, k);
    }
    for (let i = 0; i < total2; i++) {
        count2[i] = dfsSearch(map2, i , -1, k - 1);
    }
    for (const c of count2) {
        maxCount2 = Math.max(maxCount2, c);
    }
    for (let i = 0; i< total1; i++) {
        res[i] = count1[i] + maxCount2;
    }

    return res;
};

function genMap(map, edge) {
    for (const [s, e] of (edge)) {
        if (!map.has(s)) {
            map.set(s, []);
        }
        map.get(s).push(e);
        if (!map.has(e)) {
            map.set(e, []);
        }
        map.get(e).push(s);
    }
}

function dfsSearch(map, cur, parent, target) {
    if (target < 0) {
        return 0;
    }

    let count = 1;
    const next = map.get(cur) || [];
    for (const n of next) {
        if (n === parent) {
            continue;
        }
        count += dfsSearch(map, n, cur, target - 1);
    }

    return count;
}
