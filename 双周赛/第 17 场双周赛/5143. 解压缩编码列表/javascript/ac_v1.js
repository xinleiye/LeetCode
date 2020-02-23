/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let res = [];
    let arrMap = new Map();
    let countsArr = [];

    arr.forEach((val) => {
        let num = val;
        let count = 0;

        while (num > 0) {
            if (num & 1) {
                count++;
            }
            num = num >>> 1;
        }
        if (arrMap.has(count)) {
            arrMap.get(count).push(val);
        } else {
            arrMap.set(count ,[val]);
        }
    });

    arrMap.forEach((value, key) => {
        value.sort((val1, val2) => {
            return val1 - val2;
        });
        countsArr.push(key);
    });

    countsArr.sort((val1, val2) => {
        return val1 - val2;
    });

    countsArr.forEach((count) => {
        res = res.concat(arrMap.get(count));
    });

    return res;
};
