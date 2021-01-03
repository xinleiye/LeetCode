/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let curX = 0;
    let curY = 0;
    // N E S W -> 上 右 下 左
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let posSet = new Set();
    let getPosStr = (x, y) => {
        return `${x}&${y}`;
    };

    posSet.add(getPosStr(curX, curY));
    for (let i = 0; i < path.length; i++) {
        let posStr;
        let dirIndex;

        if (path[i] === "N") {
            dirIndex = 0;
        } else if (path[i] === "E") {
            dirIndex = 1;
        } else if (path[i] === "S"){
            dirIndex = 2;
        } else if (path[i] === "W") {
            dirIndex = 3;
        } else {
            return false;
        }
        curX += directions[dirIndex][0];
        curY += directions[dirIndex][1];
        posStr = getPosStr(curX, curY);
        if (posSet.has(posStr)) {
            return true;
        } else {
            posSet.add(posStr);
        }
    }

    return false;
};
