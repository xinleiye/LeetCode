/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let res = 0;
    let posX = 0;
    let posY = 0;
    const directionX = [0, 1, 0, -1];
    const directionY = [1, 0, -1, 0];
    let direction = 0; //机器人朝向，0：北；1：东；2：南；3：西
    const obstacleSet = new Set();
    const pointToNum = (x, y) => {
        return (x + 30000) << 16 | (y + 30000);
    };

    for (const [x, y] of obstacles) {
        obstacleSet.add(pointToNum(x, y));
    }
    for (const c of commands) {
        if (c === -1) {
            direction = (direction + 1) % 4;
        } else if (c === -2) {
            direction = (direction + 3) % 4;
        } else {
            for (let i = 0; i < c; i++) {
                if (!obstacleSet.has(pointToNum(posX + directionX[direction], posY + directionY[direction]))) {
                    posX += directionX[direction];
                    posY += directionY[direction];
                    res = Math.max(res, posX * posX + posY * posY);
                } else {
                    break;
                }
            }
        }
    }

    return res;
};
