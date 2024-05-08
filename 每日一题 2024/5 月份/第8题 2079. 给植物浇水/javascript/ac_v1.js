/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let res = 0;
    let cur = capacity;
    const total = plants.length;

    for (let i = 0; i < total; i++) {
        const need = plants[i];

        if (cur >= need) {
            res++;
            cur -= need;
        } else {
            res += i * 2 + 1;
            cur = capacity - need;
        }
    }

    return res;
};
