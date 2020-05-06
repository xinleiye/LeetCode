/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let daySet = new Set();
    let cache = new Array(366).fill(0);
    let getTotalCost = (day) => {
        if (day > 365) {
            return 0;
        }

        if (cache[day] > 0) {
            return cache[day];
        }

        if (daySet.has(day)) {
            cache[day] = Math.min(costs[0] + getTotalCost(1 + day), costs[1] + getTotalCost(7 + day), costs[2] + getTotalCost(30 + day));
        } else {
            cache[day] = getTotalCost(day + 1);
        }

        return cache[day];
    };

    days.forEach(aDay => {
        daySet.add(aDay);
    });

    return getTotalCost(1);
};
