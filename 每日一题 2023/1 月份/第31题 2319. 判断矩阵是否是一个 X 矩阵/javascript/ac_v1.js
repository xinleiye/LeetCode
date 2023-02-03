/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    const res = new Array(k).fill(0);
    const userMap = new Map();

    for (const [id, time] of logs) {
        if (userMap.has(id)) {
            userMap.get(id).add(time);
        } else {
            userMap.set(id, new Set().add(time));
        }
    }
    userMap.forEach((val) => {
        res[val.size - 1]++;
    });

    return res;
};
