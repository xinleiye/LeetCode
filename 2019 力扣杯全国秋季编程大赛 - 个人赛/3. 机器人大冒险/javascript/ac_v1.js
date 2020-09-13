/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var robot = function(command, obstacles, x, y) {
    let lastStep;
    let ox = 0;
    let oy = 0;
    let steps = [];
    let res = false;

    for (let i = 0, len = command.length; i < len; i++) {
        if (command[i] === "U") {
            oy = oy + 1;
        } else if (command[i] === "R") {
            ox = ox + 1;
        } else {
            continue;
        }
        steps.push([ox, oy]);
    }
    lastStep = steps[steps.length - 1];
    for (let step of steps) {
        let difx;
        let dify;

        for (let obs of obstacles) {
            difx = obs[0] - step[0];
            dify = obs[1] - step[1];
            if (obs[0] <= x && obs[1] <= y &&
                difx % lastStep[0] === 0 &&
                dify % lastStep[1] === 0 &&
                Math.floor(difx / lastStep[0]) === Math.floor(dify / lastStep[1])
            ) {
                return false;
            }
        }
        difx = x - step[0];
        dify = y - step[1];
        if (difx % lastStep[0] === 0 &&
            dify % lastStep[1] === 0 &&
            Math.floor(difx / lastStep[0]) === Math.floor(dify / lastStep[1])
        ) {
            res = true;
        }
    }
    return res;
};
