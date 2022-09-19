/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const numMap = new Map();
    for (const n of nums) {
        if (numMap.has(n)) {
            numMap.set(n, numMap.get(n) + 1);
        } else {
            numMap.set(n, 1);
        }
    }

    const numObj = [];
    numMap.forEach((count, num) => {
        numObj.push({
            num: num,
            count: count,
        });
    });
    numObj.sort((o1, o2) => {
        if (o1.count !== o2.count) {
            return o1.count - o2.count;
        } else {
            return o2.num - o1.num;
        }
    });

    const res = [];
    for (const {num, count} of numObj) {
        for (let i = 0; i < count; i++) {
            res.push(num);
        }
    }

    return res;
};
