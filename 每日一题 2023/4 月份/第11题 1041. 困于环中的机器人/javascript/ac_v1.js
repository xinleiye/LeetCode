/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const startDir = 0;
    const startX = 0;
    const startY = 0;
    let curDir = 0;
    let curX = 0;
    let curY = 0;

    for (const op of instructions) {
        if (op === "G") {
            curX += dir[curDir][0];
            curY += dir[curDir][1];
        } else if (op === "L") {
            curDir--;
            if (curDir < 0) {
                curDir = 3;
            }
        } else {
            curDir++;
            if (curDir > 3) {
                curDir = 0;
            }
        }
    }

    // 在循环内：执行一遍指令后，若返回原点，可以多次执行指令使方向向北；若未返回原点，且方向未朝北，多次执行指令后使方向朝北且回到原点
    return (curX === startX && curY === startY) || startDir !== curDir;
};
