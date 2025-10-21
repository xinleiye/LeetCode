/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function(power) {
    const powerMap = new Map();
    const powerArr = [];
    for (const p of power) {
        if (!powerMap.has(p)) {
            powerArr.push(p);
            powerMap.set(p, 0);
        }
        powerMap.set(p, powerMap.get(p) + 1);
    }

    const total = powerArr.length;
    const cast = new Array(total + 1).fill(0);
    let index = 0;
    powerArr.sort((p1, p2) => p1 -p2);
    for (let i = 0; i < total; i++) {
        const cur = powerArr[i];
        while (powerArr[index] < cur - 2) {
            index++;
        }
        cast[i + 1] = Math.max(cast[i], cast[index] + cur * powerMap.get(cur));
    }

    return cast[total];
};
