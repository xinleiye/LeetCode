/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function(nums, moveFrom, moveTo) {
    const numSet = new Set(nums);
    const moveTotal = moveFrom.length;
    const res = [];

    for (let i = 0; i < moveTotal; i++) {
        numSet.delete(moveFrom[i]);
        numSet.add(moveTo[i]);
    }
    numSet.forEach(n => {
        res.push(n);
    });
    res.sort((n1, n2) => n1 - n2);

    return res;
};
