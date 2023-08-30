/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function(nums, moveFrom, moveTo) {
    const posSet = new Set();
    for (const p of nums) {
        posSet.add(p);
    }

    const opNum = moveFrom.length;
    for (let i = 0; i < opNum; i++) {
        posSet.delete(moveFrom[i]);
        posSet.add(moveTo[i]);
    }

    const res = [];
    posSet.forEach((val) => {
        res.push(val);
    });
    res.sort((p1, p2) => p1 - p2);

    return res;
};
