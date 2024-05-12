/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    const total = garbage.length;
    const travelTime = new Array(total).fill(0);
    for (let i = 0; i < total - 1; i++) {
        travelTime[i + 1] = travelTime[i] + travel[i];
    }
    
    const generateGarbage = (garbage, garbageType) => {
        const arr = [{
            count: 0,
            index: 0
        }];
        const total = garbage.length;

        for (let i = 0; i < total; i++) {
            let count = 0;
            const g = garbage[i];

            for (let j = 0, len = g.length; j < len; j++) {
                if (g[j] === garbageType) {
                    count++;
                }
            }
            if (count > 0) {
                arr.push({
                    count,
                    index: i
                });
            }
        }
        
        return arr;
    };
    const mGarbage = generateGarbage(garbage, "M");
    const pGarbage = generateGarbage(garbage, "P");
    const gGarbage = generateGarbage(garbage, "G");

    let res = 0;
    const calcTime = (garbage, travelTime) => {
        let time = 0;
        const length = garbage.length;
        
        for (let i = 1; i < length; i++) {
            time += garbage[i].count + travelTime[garbage[i].index] - travelTime[garbage[i - 1].index];
        }
        
        return time;
    };
    
    res += calcTime(mGarbage, travelTime);
    res += calcTime(pGarbage, travelTime);
    res += calcTime(gGarbage, travelTime);
    
    return res;
};
