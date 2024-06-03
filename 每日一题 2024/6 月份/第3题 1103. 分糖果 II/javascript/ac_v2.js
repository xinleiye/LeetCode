/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    const res = new Array(num_people).fill(0);
    const an = Math.floor((Math.sqrt(8 * candies + 1) - 1) / 2);
    const loop = Math.floor(an / num_people);
    const rest = an % num_people;

    for (let i = 0; i < num_people; i++) {
        res[i] = (i + 1) * loop + loop * (loop - 1) * num_people / 2;
        if (i < rest) {
            res[i] += loop * num_people + 1 + i;
        }
    }
    res[rest] += candies - (an + 1) * an / 2;

    return res;
};
