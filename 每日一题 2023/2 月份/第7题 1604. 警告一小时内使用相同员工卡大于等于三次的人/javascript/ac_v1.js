/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
    const res = [];
    const recordMap = new Map();
    const total = keyName.length;
    const time2Num = (time) => {
        const [h, m] = time.split(":").map(item => Number(item));

        return h * 100 + m;
    };

    for (let i = 0; i < total; i++) {
        if (recordMap.has(keyName[i])) {
            recordMap.get(keyName[i]).push(time2Num(keyTime[i]));
        } else {
            recordMap.set(keyName[i], [time2Num(keyTime[i])]);
        }
    }
    recordMap.forEach((time, name) => {
        const len = time.length;

        time.sort((t1, t2) => t1 - t2);
        for (let i = 2; i < len; i++) {
            if (time[i] - time[i - 2] <= 100) {
                res.push(name);
                break;
            }
        }
    });

    return res.sort();
};
