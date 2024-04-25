/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
    let res = 0;

    while (mainTank >= 5 && additionalTank > 0) {
        res += 50;
        mainTank -= 4;
        additionalTank -= 1;
    }
    res += mainTank * 10;

    return res;
};
