/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let res = 0;
    let curCap = capacity;
    const total = plants.length;

    for (let i = 0; i < total; i++) {
        const needCap = plants[i];

        if (curCap >= needCap) {
            res++;
            curCap -= needCap;
        } else {
            res += i * 2 + 1;
            curCap = capacity - needCap;
        }
    }

    return res;
};
