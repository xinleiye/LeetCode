/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let res = 0;
    const rest60 = new Array(60).fill(0);

    for (const t of time) {
        rest60[t % 60]++;
    }
    res += calcPair(rest60[0]);
    res += calcPair(rest60[30]);
    for (let i = 1; i < 30; i++) {
        res += rest60[i] * rest60[60 - i];
    }

    return res;
};

function calcPair(num) {
    return num * (num - 1) / 2;
}
