/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    const MAXAGE = 120;
    const ageCount = new Array(MAXAGE + 1).fill(0);
    for (const a of ages) {
        ageCount[a]++;
    }

    let res = 0;
    for (let i = 1; i <= MAXAGE; i++) {
        const minValid = (i >>> 1) + 7;
        // 同龄人可能无法交友
        if (minValid >= i) {
            continue;
        }
        for (let j = 1 + minValid; j < i; j++) {
            res += ageCount[i] * ageCount[j];
        }
        res += ageCount[i] * (ageCount[i] - 1);
    }

    return res;
};
