/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
    let res = Infinity;
    let distanceMap = new Array(word.length);
    let getDistance = (src, tar) => {
        return Math.abs((src % 6 - tar % 6) + (src - src % 6) / 6 - (tar - tar % 6) / 6);
    };

    for (let i = 0; i <= word.length; i++) {
        distanceMap[i] = new Array(26)
    }
    for (let i = 0; i <= word.length; i++) {
        for (let k = 0; k < 26; k++) {
            distanceMap[i][k] = (new Array(26)).fill(100);
        }
    }

    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            distanceMap[0][i][j] = getDistance(i, word.charCodeAt(0) - 65);
            // distanceMap[0][i][j] = getDistance(j, word.charCodeAt(0) - 65);
        }
    }

    for (let i = 1, len = word.length; i < len; i++) {
        let tar = word.charCodeAt(i) - 65;

        for (let j = 0; j < 26; j++) {
            for (let k = 0; k < 26; k++) {
                if (distanceMap[i - 1][j][k] < 100) {

                }
                distanceMap[i][j][k] = getDistance(i, word.charCodeAt(0) - 65);
                // distanceMap[0][i][j] = getDistance(j, word.charCodeAt(0) - 65);
                if (i === word.length - 1) {
                    res = Math.min(res, distanceMap[i][tar][k]);
                    res = Math.min(res, distanceMap[i][j][tar]);
                }
            }
        }
    }

    for (let i = 0; i < 26; i++) {
        res = Math.min(res, distanceMap[i][tar][k]);
        res = Math.min(res, distanceMap[i][j][tar]);
    }
    console.log(distanceMap[1]);
    return res;
};
