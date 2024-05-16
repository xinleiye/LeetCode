/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function(milestones) {
    let longest = 0;
    let total = 0;

    for (const n of milestones) {
        longest = Math.max(longest, n);
        total += n;
    }
    total -= longest;

    return longest > total + 1 ? total * 2 + 1 : total + longest;
};
