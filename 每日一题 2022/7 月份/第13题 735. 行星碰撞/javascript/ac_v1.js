/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const res = [];
    const collision = (arr) => {
        while (arr.length > 1) {
            let t1 = arr.pop();
            let t2 = arr.pop();

            if (t2 > 0 && t1 < 0) {
                if (t1 + t2 !== 0) {
                    arr.push(Math.abs(t1) > Math.abs(t2) ? t1 : t2);
                }
            } else {
                arr.push(t2);
                arr.push(t1);
                break;
            }
        }
    };

    for (const a of asteroids) {
        res.push(a);
        collision(res);
    }

    return res;
};
