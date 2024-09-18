/**
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */
var latestTimeCatchTheBus = function(buses, passengers, capacity) {
    buses.sort((b1, b2) => b1 - b2);
    passengers.sort((p1, p2) => p1 - p2);

    let index = 0;
    let space = 0;
    for (const b of buses) {
        space = capacity;
        while (space > 0 && index < passengers.length && passengers[index] <= b) {
            space--;
            index++;
        }
    }
    index--;

    let res = space > 0 ? buses[buses.length - 1] : passengers[index];
    while (index >= 0 && passengers[index] === res) {
        index--;
        res--;
    }

    return res;
};
