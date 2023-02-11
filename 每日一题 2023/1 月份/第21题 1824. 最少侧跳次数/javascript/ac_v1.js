/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function(obstacles) {
    let steps = new Array(4)
    const total = obstacles.length;
    const MAX = 1e9 + 7;

    steps[1] = 1;
    steps[2] = 0;
    steps[3] = 1;
    for (let i = 1; i < total; i++) {
        let min = MAX;

        for (let j = 1; j <= 3; j++) {
            if (j !== obstacles[i]) {
                min = Math.min(min, steps[j]);
            } else {
                steps[j] = MAX;
            }
        }
        for (let j = 1; j <= 3; j++) {
            if (j !== obstacles[i]) {
                steps[j] = Math.min(steps[j], min + 1);
            }
        }
    }

    return Math.min(steps[1], steps[2], steps[3]);
};
