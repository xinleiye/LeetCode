/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    let curMass = mass;

    asteroids.sort((val1, val2) => val1 - val2);
    for (let i = 0, len = asteroids.length; i < len; i++) {
        if (curMass >= asteroids[i]) {
            curMass += asteroids[i];
        } else {
            return false;
        }
    }

    return true;
};
