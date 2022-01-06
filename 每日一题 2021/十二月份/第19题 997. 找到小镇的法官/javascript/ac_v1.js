/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trustMap = new Array(n + 1);

    for (let i = 0; i <= n; i++) {
        trustMap[i] = new Array(n + 1).fill(0);
    }
    trust.forEach(item => {
        trustMap[item[0]][item[1]] = 1;
    });
    for (let i = 1; i <= n; i++) {
        let trustMe = 0;

        for (let j = 1; j <= n; j++) {
            if (trustMap[i][j] === 1) {
                break;
            }
            if (trustMap[j][i] === 1) {
                trustMe++;
            }
        }

        if (trustMe === n - 1) {
            return i;
        }
    }

    return -1;
};
