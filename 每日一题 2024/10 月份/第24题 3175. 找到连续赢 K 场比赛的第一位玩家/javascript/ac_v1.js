/**
 * @param {number[]} skills
 * @param {number} k
 * @return {number}
 */
var findWinningPlayer = function(skills, k) {
    let index = 1;
    let res = 0;
    let win = 0;
    const total = skills.length;

    while (index < total && win < k) {
        if (skills[index] > skills[res]) {
            res = index;
            win = 0;
        }
        win++;
        index++;
    }

    return res;
};
