/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    let res = 0;
    let roadMap = new Array(n);
    let cityRoadNum = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        roadMap[i] = new Array(n).fill(false);
    }

    roads.forEach(road => {
        roadMap[road[0]][road[1]] = true;
        roadMap[road[1]][road[0]] = true;
    });

    for (let i = 0; i < n; i++) {
        let num = 0;
        
        for (let j = 0; j < n; j++) {
            if (roadMap[i][j]) {
                num++;
            }
        }
        cityRoadNum[i] = num;
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            res = Math.max(res, cityRoadNum[i] + cityRoadNum[j] - (roadMap[i][j] ? 1 : 0));
        }
    }

    return res;
};
