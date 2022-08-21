/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function(s) {
    let times = 0;
    const total = s.length;
    const bitsArr = s.split("");

    while (true) {
        let flag = false;
        let index = 0;
        
        while (index < total) {
            if (bitsArr[index] === "0" && ((index + 1 < total) && bitsArr[index + 1] === "1")) {
                bitsArr[index] = "1";
                bitsArr[index + 1] = "0";
                flag = true;
                index += 2;
            } else {
                index++;
            }
        }
        if (!flag) {
            break;
        }
        times++;
    }
    
    return times;
};
