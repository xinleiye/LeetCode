/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let res = 0;
    let left = 0;
    let right = people.length - 1;

    people.sort((p1, p2) => p1 -p2);
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        res++;
    }

    return res;
};
