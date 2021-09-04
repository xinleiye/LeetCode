/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const MaxCost = n * 1e4 + 1;
    let res = MaxCost;
    const costMap = new Array(k + 2);

    for (let i = 0; i < k + 2; i++) {
        costMap[i] = new Array(n).fill(MaxCost);
    }

    costMap[0][src] = 0;
    for (let i = 1; i <= k + 1; i++) {
        for (let item of flights) {
            const start = item[0];
            const end = item[1];
            const cost = item[2];

            costMap[i][end] = Math.min(costMap[i][end], costMap[i - 1][start] + cost);
        }
    }

    for (let i = 1; i <= k + 1; i++) {
        res = Math.min(res, costMap[i][dst]);
    }

    return res === MaxCost ? -1 : res;
};
