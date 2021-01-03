/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    let res = 0;
    let rangeMap = [];
    let visited = new Array(n + 1).fill(false);
    let covered = 0;

    for (let i = 0; i <= n; i++) {
        let rang = [];

        rang[0] = i - ranges[i] < 0 ? 0 : i - ranges[i];
        rang[1] = i + ranges[i] > n ? n : i + ranges[i];
        rangeMap.push(rang);
    }

    while (covered < n) {
        let maxRange = 0;
        let rangeIndex = -1;

        for (let i = 0; i <= n; i++) {
            if (!visited[i] && rangeMap[i][0] <= covered && rangeMap[i][1] > maxRange) {
                maxRange = rangeMap[i][1];
                rangeIndex = i;
            }
        }
        if (rangeIndex === -1) {
            res = -1;
            break;
        }
        covered = maxRange;
        visited[rangeIndex] = true;
        res++;
    }

    return res;
};
