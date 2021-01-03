/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function(arr, k) {
    let mid;
    let strengthMap = new Map();
    let strengthArr = [];
    let sortedArrByStrength = [];

    arr.sort((val1, val2) => {
        return val1 - val2;
    });

    mid = arr[Math.floor((arr.length - 1) / 2)];

    arr.forEach(val => {
        let strength = Math.abs(val - mid);
        
        if (strengthMap.has(strength)) {
            strengthMap.get(strength).push(val);
        } else {
            strengthMap.set(strength, [val])
        }
    });

    strengthMap.forEach((val, key) => {
        val.sort((val1, val2) => {
            return val2 - val1;
        });
        strengthArr.push(key);
    });

    strengthArr.sort((val1, val2) => {
        return val2 - val1;
    });

    strengthArr.forEach(val => {
        sortedArrByStrength.push(...(strengthMap.get(val)));
    });

    return sortedArrByStrength.slice(0, k);
};
