/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function(towers, radius) {
    let res = [];
    let maxPower = 0;

    for (let i = 0; i <= 50; i++) {
        for (let j = 0; j <= 50; j++) {
            let dist;
            let power = 0;

            for (let k = 0; k < towers.length; k++) {
                let tower = towers[k];

                dist = Math.pow(tower[0] - i, 2) + Math.pow(tower[1] - j, 2);
                if (dist > Math.pow(radius, 2)) {
                    continue;
                }
                power += Math.floor(tower[2] / (1 + Math.sqrt(dist)));
            }
            if (power > maxPower) {
                maxPower = power;
                res = [i, j];
            }
        }
    }

    return res;
};
