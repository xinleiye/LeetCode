/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const durations = [1, 7, 30];
    const total = days.length
    const memo = new Array(total).fill(0);

    const dpSearch = (index) => {
        if (index >= total) {
            return 0;
        }
        if (memo[index] > 0) {
            return memo[index];
        }
        memo[index] = Number.MAX_SAFE_INTEGER;
    
        let next = index;
        for (let i = 0; i < 3; i++) {
            while (next < total && days[next] < days[index] + durations[i]) {
                next++;
            }
            memo[index] = Math.min(memo[index], dpSearch(next) + costs[i]);
        }

        return memo[index];
    };

    return dpSearch(0);
};
