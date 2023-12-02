/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    const MAX = 1000
    const start = new Array(MAX + 1).fill(0);
    const end = new Array(MAX + 1).fill(0);
    for (const [c, s, e] of trips) {
        start[s] += c;
        end[e] += c;
    }

    let curCapacity = 0;
    for (let i = 0; i <= MAX; i++) {
        curCapacity -= end[i];
        curCapacity += start[i];
        if (curCapacity > capacity) {
            return false;
        }
    }

    return true;
};
