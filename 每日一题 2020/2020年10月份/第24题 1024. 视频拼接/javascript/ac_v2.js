/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
    let dp = new Array(T + 1).fill(200);

    dp[0] = 0;
    for (let i = 1; i <= T; i++) {
        for (let j = 0; j < clips.length; j++) {
            if (clips[j][0] < i && clips[j][1] >= i) {
                dp[i] = Math.min(dp[i], dp[clips[j][0]] + 1);
            }
        }
    }

    return dp[T] === 200 ? -1 : dp[T];
};
