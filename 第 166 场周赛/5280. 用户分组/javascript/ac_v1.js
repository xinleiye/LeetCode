/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let res = [];
    let userMap = new Map();

    for (let i = 0; i < groupSizes.length; i++) {
        let size = groupSizes[i];

        if (userMap.has(size)) {
            userMap.get(size).push(i);
        } else {
            userMap.set(size, [i]);
        }
    }

    userMap.forEach((value, key) => {
        let len = value.length / key;

        for (let i = 0; i < len; i++) {
            res.push(value.slice(i * key, (i + 1) * key));
        }
    });

    return res;
};
