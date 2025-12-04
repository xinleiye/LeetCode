/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    const total = directions.length;
    let res = 0;
    let left = 0;
    let right = total - 1;

    while (left < total && directions[left] === "L") {
        left++;
    }
    while (right >= left && directions[right] === "R") {
        right--;
    }
    for (let i = left; i <= right; i++) {
        if (directions[i] !== "S") {
            res++;
        }
    }

    return res;
};
