/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
 var findingUsersActiveMinutes = function(logs, k) {
    const res = new Array(k).fill(0);
    const userMap = new Map();

    logs.forEach(item => {
        if (userMap.has(item[0])) {
            userMap.get(item[0]).add(item[1]);
        } else {
            userMap.set(item[0], new Set().add(item[1]));
        }
    });

    userMap.forEach(val => {
        res[val.size - 1]++;
    });

    return res;
};
