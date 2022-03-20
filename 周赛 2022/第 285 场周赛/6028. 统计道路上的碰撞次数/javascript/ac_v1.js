/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let res = 0;
    let curCar = 1;
    const total = directions.length;
    const dirs = directions.split("");

    while (curCar < total) {
        let preCar = curCar - 1;
        const curDir = dirs[curCar];

        if (dirs[preCar] === "R" && curDir === "L") {
            res += 1;
            dirs[curCar] = "S";
            while (preCar >= 0 && dirs[preCar] === "R") {
                res += 1;
                dirs[preCar] = "S";
                preCar--;
            }
        } else if (dirs[preCar] === "S" && curDir === "L") {
            res += 1;
            dirs[curCar] = "S";
        } else if (curDir === "S") {         
            while (preCar >= 0 && dirs[preCar] === "R") {
                res += 1;
                dirs[preCar] = "S";
                preCar--;
            }
        }
        curCar++;
    }

    return res;
};
