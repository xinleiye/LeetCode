/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function(towers, radius) {
    let max = -1;
    let res = [];
    let maxDistance = Math.pow(radius, 2);

    for (let i = 0; i <= 50; i++) {
        for (let j = 0; j <= 50; j++) {
            let strength = 0;

            for (const [x, y, q] of towers) {
                const distance = Math.pow(i - x, 2) + Math.pow(j - y, 2);

                if (distance <= maxDistance) {
                    strength += Math.floor(q / (1 + Math.sqrt(distance)));
                }
            }
            if (strength > max) {
                res = [i, j];
                max = strength;
            }
        }
    }

    return res;
};
