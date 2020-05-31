/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let arrMap = new Map();

    arr.forEach(val => {
        if (arrMap.has(val)) {
            arrMap.set(val, arrMap.get(val) + 1);
        } else {
            arrMap.set(val, 1);
        }
    });

    for (let i = 0; i < target.length; i++) {
        if (arrMap.has(target[i])) {
            let count = arrMap.get(target[i]);
            
            if (count === 1) {
                arrMap.delete(target[i]);
            } else {
                arrMap.set(target[i], count - 1);
            }
        } else {
            return false;
        }
    }

    return arrMap.size === 0 ? true : false;
};
