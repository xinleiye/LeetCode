/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const countMap = new Map();
    for (const n of arr) {
        countMap.set(n, (countMap.get(n) || 0) + 1);
    }

    const countArr = [...countMap.values()].sort((c1, c2) => c2 - c1);
    let res = 0;
    let count = 0;
    for (const c of countArr) {
        count += c;
        res++;
        if (count * 2 >= arr.length) {
            break;
        }
    }

    return res;
};
