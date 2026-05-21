/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    let res = nums.length;
    const indexMap = new Map();

    for (let i = nums.length - 1; i >= 0; i--) {
        const vNum = verserNum(nums[i]);

        if (indexMap.has(vNum)) {
            res = Math.min(res, indexMap.get(vNum) - i);
        }
        indexMap.set(nums[i], i);
    }

    return res === nums.length ? -1 : res;
};

function verserNum(num) {
    let n = 0;

    while (num) {
        n = n * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return n;
}
