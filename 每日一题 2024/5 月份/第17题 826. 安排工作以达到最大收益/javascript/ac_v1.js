/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    worker.sort((w1, w2) => w1 - w2);

    const works = [];
    const total = difficulty.length;
    for (let i = 0; i < total; i++) {
        works.push([difficulty[i], profit[i]]);
    }
    works.sort((w1, w2) => w1[0] - w2[0]);

    let res = 0;
    let index = 0;
    let max = 0;
    for (const w of worker) {
        while (index < total && w >= works[index][0]) {
            max = Math.max(max, works[index][1]);
            index++;
        }
        res += max;
    }

    return res;
};
