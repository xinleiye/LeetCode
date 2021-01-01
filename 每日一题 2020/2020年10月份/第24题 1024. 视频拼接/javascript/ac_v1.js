/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
    let res = 200;
    let dfs = (count, pre) => {
        if (clips[pre][1] >= T) {
            res = Math.min(res, count);
            return;
        }
        for (let i = pre + 1; i < clips.length; i++) {
            if (count >= res ||
                clips[i][0] > T ||
                clips[i][0] > clips[pre][1]) {
                return;
            } else {
                dfs(count + 1, i);
            }
        }
    };

    clips.sort((val1, val2) => {
        return val1[0] - val2[0];
    });

    for (let i = 0; i < clips.length; i++) {
        if (clips[i][0] === 0) {
            dfs(1, i);
        } else {
            break;
        }
    }

    return res === 200 ? -1 : res;
};
