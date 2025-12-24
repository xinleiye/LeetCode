/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let total = apple.reduce((sum, cur) => sum + cur);
    let res = 0;

    capacity.sort((c1, c2) => c2 - c1);
    while (total > 0) {
        total -= capacity[res];
        res++;
    }

    return res;
};
