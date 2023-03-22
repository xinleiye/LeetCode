/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    let res = 0;
    const total = scores.length;
    const member = new Array(total);
    const dp = new Array(total).fill(0);

    for (let i = 0; i < total; i++) {
        member[i] = [scores[i], ages[i]];
    }
    member.sort(([s1, a1], [s2, a2]) => {
        if (s1 !== s2) {
            return s1 - s2;
        }
        return a1 - a2;
    });
    for (let i = 0; i < total; i++) {
        const [si, ai] = member[i];

        for (let j = i - 1; j >= 0; j--) {
            if (ai >= member[j][1]) {
                dp[i] = Math.max(dp[i], dp[j]);
            }
        }
        dp[i] += si;
        res = Math.max(res, dp[i]);
    }

    return res;
};
