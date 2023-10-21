/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    let type = 0;
    const HEAVY = 1;
    const BULKY = 2;

    if (mass >= 100) {
        type |= HEAVY;
    }
    if ((length >= 1e4 || height >= 1e4 || width >= 1e4 || mass >= 1e4) ||
        (BigInt(length) * BigInt(width) * BigInt(height) >= BigInt(1e9))) {
        type |= BULKY;
    }

    if (type === HEAVY) {
        return "Heavy";
    }
    if (type === BULKY) {
        return "Bulky";
    }
    if (type === (HEAVY | BULKY)) {
        return "Both";
    }
    return "Neither";
};
