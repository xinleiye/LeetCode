/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let res = 0;
    const indexMap = new Map();
    const calcIndex = (num) => {
        let val = 0;
        
        while (num > 0) {
            val += num % 10;
            num = Math.floor(num / 10);
        }
        
        return val;
    };
    
    for (let i = lowLimit; i <= highLimit; i++) {
        const index = calcIndex(i);
        
        if (indexMap.has(index)) {
            indexMap.set(index, indexMap.get(index) + 1);
        } else {
            indexMap.set(index, 1);
        }
    }
    
    indexMap.forEach(val => {
        res = Math.max(res, val);
    });
    
    return res;
};
