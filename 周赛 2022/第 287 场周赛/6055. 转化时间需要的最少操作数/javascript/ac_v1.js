/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    let res = 0;
    const calcMinutes = (time) => {
        const t = time.split(":").map(n => Number(n));
        return t[0] * 60 + t[1];
    };
    let currentMinutes = calcMinutes(current);
    const correctMinutes = calcMinutes(correct);
    while (currentMinutes < correctMinutes) {
        const diff = correctMinutes - currentMinutes;
        if (diff >= 60) {
            const count = Math.floor(diff / 60);
            res += count
            currentMinutes += 60 * count;
        } else if (diff >= 15) {
            const count = Math.floor(diff / 15);
            res += count
            currentMinutes += 15 * count;
        } else if (diff >= 5) {
            const count = Math.floor(diff / 5);
            res += count
            currentMinutes += 5 * count;
        } else {
            res += diff;
            currentMinutes += diff;
        }
    }
    
    return res;
};
