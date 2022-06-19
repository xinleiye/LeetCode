/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let max = 0;
    for (const h of heights) {
        max = Math.max(h, max);
    }

    const countArr = new Array(max + 1).fill(0);
    for (const h of heights) {
        countArr[h]++;
    }

    let index = 0;
    let res = 0;
    for (let i = 1; i <= max; i++) {
        for (let j = 1; j <= countArr[i]; j++) {
            if (heights[index] !== i) {
                res++;
            }
            index++;
        }
    }
    return res;
};
