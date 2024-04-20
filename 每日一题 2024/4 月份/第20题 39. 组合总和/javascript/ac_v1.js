/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    const stack = [];
    const dfsSearch = (index, numArr, tar, buffs, buff) => {
        if (tar < 0) {
            return;
        }
        if (tar === 0) {
            buffs.push(buff.slice());
        }
        for (let i = index; i < numArr.length; i++) {
            buff.push(numArr[i]);
            dfsSearch(i, numArr, tar - numArr[i], buffs, buff);
            buff.pop();
        }
    };

    dfsSearch(0, candidates, target, res, stack);

    return res;
};
