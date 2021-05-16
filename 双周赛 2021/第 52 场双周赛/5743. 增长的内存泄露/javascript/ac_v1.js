/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function(memory1, memory2) {
    const res = new Array(3).fill(0);
    let time = 1;

    while (time <= memory1 || time <= memory2) {
        if (memory1 >= memory2) {
            memory1 -= time;
        } else {
            memory2 -= time;
        }
        time++;
    }
    
    res[0] = time;
    res[1] = memory1;
    res[2] = memory2;

    return res;
};
