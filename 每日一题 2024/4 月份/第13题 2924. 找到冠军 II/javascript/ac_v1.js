/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
    const defeated = new Array(n).fill(-1);
    for (const [s, e] of edges) {
        defeated[e] = s;
    }

    let winner = -1;
    for (let i = 0; i < n; i++) {
        if (defeated[i] === -1) {
            if (winner === -1) {
                winner = i;
            } else {
                return -1;
            }
        }
    }

    return winner;
};
