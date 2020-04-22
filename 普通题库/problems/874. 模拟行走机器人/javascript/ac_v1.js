/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let res = 0;
    let posX = 0;
    let posY = 0;
    let directionX = [0, 1, 0, -1];
    let directionY = [1, 0, -1, 0];
    let direction = 0; //机器人朝向，0：北；1：东；2：南；3：西
    let obstacleSet = new Set();
    let pointToNum = (x, y) => {
        return (x + 30000) << 16 | (y + 30000);
    };

    obstacles.forEach((val) => {
        obstacleSet.add(pointToNum(val[0], val[1]));
    });

    commands.forEach((val) => {
        switch (val) {
            case -1:
                direction = (direction + 1) % 4;
                break;
            case -2:
                direction = (direction + 3) % 4;
                break;
            default:
                for (let i = 0; i < val; i++) {
                    if (!obstacleSet.has(pointToNum(posX + directionX[direction], posY + directionY[direction]))) {
                        posX += directionX[direction];
                        posY += directionY[direction];
                        res = Math.max(res, posX * posX + posY * posY);
                    } else {
                        break;
                    }
                }
                break;
        }
    });

    return res;
};
