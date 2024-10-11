/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    const map1 = new Map();
    const map2 = new Map();
    let res = 0;
    let max1 = 0;

    for (const n of nums1) {
        add2Map(map1, n);
        max1 = Math.max(max1, n);
    }
    for (const n of nums2) {
        add2Map(map2, n);
    }
    map2.forEach((c, n) => {
        for (let i = n * k; i <= max1; i += n * k) {
            if (map1.has(i)) {
                res += map1.get(i) * c;
            }
        }
    });

    return res;
};

function add2Map(map, num) {
    if (map.has(num)) {
        map.set(num, map.get(num) + 1);
    } else {
        map.set(num, 1);
    }
}
