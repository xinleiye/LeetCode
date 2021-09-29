/**
 * @param {number[]} machines
 * @return {number}
 */
 var findMinMoves = function(machines) {
    let res = 0;
    const total = machines.reduce((pre, val) =>{
        return pre + val;
    });
    let avg = 0;
    let sum = 0;

    if (total % machines.length) {
        return -1;
    }
    avg = total / machines.length;
    for (let num of machines) {
        num -= avg;
        sum += num;
        res = Math.max(res, Math.max(Math.abs(sum), num));
    }

    return res;
};
