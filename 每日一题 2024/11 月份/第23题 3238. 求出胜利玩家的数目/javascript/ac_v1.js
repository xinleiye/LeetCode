/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {
    const ballCount = new Array(n).fill(0).map(_ => new Array(11).fill(0));
    let res = 0;

    for (const [x, y] of pick) {
        ballCount[x][y]++;
    }
    for (let i = 0; i < n; i++) {
        for (const c of ballCount[i]) {
            if (c > i) {
                res++;
                break;
            }
        }
    }

    return res;
};
