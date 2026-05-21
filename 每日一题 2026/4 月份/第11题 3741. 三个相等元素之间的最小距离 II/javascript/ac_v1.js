/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    const total = nums.length;
    const numMap = new Map();
    let res = Infinity;

    for (let i = 0; i < total; i++) {
        add2Map(numMap, nums[i], i);
    }
    numMap.forEach((indexs) => {
        const length = indexs.length;

        for (let i = 2; i < length; i++) {
            res = Math.min(res, (indexs[i] - indexs[i - 2]) * 2);
        }
    });

    return res === Infinity ? -1 : res;
};

function add2Map(map, num, index) {
    if (!map.has(num)) {
        map.set(num, []);
    }
    map.get(num).push(index);
}
