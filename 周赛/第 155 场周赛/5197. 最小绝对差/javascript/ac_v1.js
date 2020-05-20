/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let res;
    let min;
    let len = arr.length;

    arr.sort((val1, val2) => {
        return val1 - val2;
    });
    min = arr[len - 1];
    for (let i = 1, len = arr.length; i < len; i++) {
        let dif = arr[i] - arr[i - 1];
        if (dif < min) {
            res = [];
            res.push([arr[i - 1], arr[i]]);
            min = dif;
        } else if (dif === min) {
            res.push([arr[i - 1], arr[i]]);
        }
    }

    return res;
};
