/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    let res = 0;
    const total = events.length;
    
    events.sort((e1, e2) => {
        if (e2[2] !== e1[2]) {
            return e2[2] - e1[2];
        } else {
            return e2[0] - e1[0];
        }
    });
    
    res = events[0][2];
    for (let i = 0; i < total - 1; i++) {
        const startTime = events[i][0];
        const endTime = events[i][1];

        for (let j = i + 1; j < total; j++) {
            if (events[j][1] < startTime || events[j][0] > endTime) {
                res = Math.max(res, events[i][2] + events[j][2]);
                break;
            }
        }
    }
    
    return res;
};
