/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
    let res = [];
    let roundCount = new Array(n + 1).fill(0);
    let maxCount = 0;

    for (let i = 1; i < rounds.length; i++) {
        if (rounds[i - 1] < rounds[i]) {
            for (let j = rounds[i - 1]; j < rounds[i]; j++) {
                roundCount[j]++;
            }
        } else {
            for (let j = rounds[i - 1]; j <= n; j++) {
                roundCount[j]++;
            }
            for (let j = 1; j < rounds[i]; j++) {
                roundCount[j]++;
            }
        }
    }
    roundCount[rounds[rounds.length - 1]]++;
    roundCount.forEach(val => {
        maxCount = Math.max(val, maxCount);
    });
    roundCount.forEach((val, key) => {
        if (val === maxCount) {
            res.push(key);
        }
    });

    return res;
};
