/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
    let res = Infinity;
    let distanceMap = new Array(word.length + 1);
    let getDistance = (src, tar) => {
        return Math.abs(src % 6 - tar % 6) + Math.abs((src - src % 6) / 6 - (tar - tar % 6) / 6);
    };

    for (let i = 0; i <= word.length; i++) {
        distanceMap[i] = new Array(26);
    }
    for (let i = 0; i < 26; i++) {
        distanceMap[0][i] = (new Array(26)).fill(0);
    }
    for (let i = 1; i <= word.length; i++) {
        for (let k = 0; k < 26; k++) {
            distanceMap[i][k] = (new Array(26)).fill(Infinity);
        }
    }

    for (let i = 1, len = word.length; i <= len; i++) {
        let tar = word.charCodeAt(i - 1) - 65;

        for (let j = 0; j < 26; j++) {
            for (let k = 0; k < 26; k++) {
                if (distanceMap[i - 1][j][k] !== Infinity) {
                    // 左指头
                    distanceMap[i][tar][k] = Math.min(distanceMap[i][tar][k], distanceMap[i - 1][j][k] + getDistance(j, tar));
                    // 右指头
                    distanceMap[i][j][tar] = Math.min(distanceMap[i][j][tar], distanceMap[i - 1][j][k] + getDistance(k, tar));
                }
                if (i === word.length) {
                    res = Math.min(res, distanceMap[i][tar][k]);
                    res = Math.min(res, distanceMap[i][j][tar]);
                }
            }
        }
    }

    return res;
};
