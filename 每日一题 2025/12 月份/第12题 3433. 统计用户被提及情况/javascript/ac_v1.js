/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function(numberOfUsers, events) {
    const res = new Array(numberOfUsers).fill(0);
    const userStatus = new Array(numberOfUsers).fill(0);

    events.sort((e1, e2) => {
        const t1 = Number(e1[1]);
        const t2 = Number(e2[1]);

        if (t1 !== t2) {
            return t1 - t2;
        }

        return e1[0] > e2[0] ? -1 : 1;
    });
    for (const [type, time, ids] of events) {
        const t = Number(time);

        if (type === "MESSAGE") {
            for (let i = 0; i < numberOfUsers; i++) {
                if (userStatus[i] && userStatus[i] + 60 <= t) {
                    userStatus[i] = 0;
                }
            }

            if (ids === "ALL") {
                for (let i = 0; i < numberOfUsers; i++) {
                    res[i]++;
                }
            } else if (ids === "HERE") {
                console.log("Here", userStatus);
                for (let i = 0; i < numberOfUsers; i++) {
                    res[i] += (userStatus[i] === 0 ? 1 : 0);
                }
            } else {
                ids.split(" ").forEach(id => {
                    res[Number(id.substring(2))]++;
                });
            }
        } else {
            userStatus[ids] = t;
        }
    }

    return res;
};
