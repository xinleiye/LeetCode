/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function(nums) {
    let res = 0;
    const MOD = 1e9 + 7;
    const countMap = new Map();
    const preMap = new Map();

    for (const n of nums) {
        add2Map(countMap, n);
    }
    for (const n of nums) {
        const tar = 2 * n;

        if (preMap.has(tar)) {
            const pre = preMap.get(tar);
            const post = countMap.get(tar) - pre - (n === tar ? 1 : 0);

            res = (res + pre * post) % MOD;
        }
        add2Map(preMap, n);
    }

    return res;
};

function add2Map(map, n) {
    if (!map.has(n)) {
        map.set(n, 0);
    }
    map.set(n, map.get(n) + 1);
}
