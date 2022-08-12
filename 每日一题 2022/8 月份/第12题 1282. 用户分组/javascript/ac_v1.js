/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const userGroupMap = new Map();
    const total = groupSizes.length;
    for (let i = 0; i < total; i++) {
        const size = groupSizes[i];

        if (userGroupMap.has(size)) {
            userGroupMap.get(size).push(i);
        } else {
            userGroupMap.set(size, [i]);
        }
    }

    const res = [];
    userGroupMap.forEach((group, size) => {
        for (let i = 0, len = group.length / size; i < len; i++) {
            res.push(group.slice(i * size, (i + 1) * size));
        }
    });

    return res;
};
