/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let res = false;
    let length = arr.length;
    let searchPath = [];
    let search = (aPos) => {
        if (res || aPos < 0 || aPos >= length || searchPath.indexOf(aPos) >= 0) {
            return;
        }
        if (arr[aPos] === 0) {
            res = true;
            return;
        }
        searchPath.push(aPos);
        search(aPos + arr[aPos]);
        search(aPos - arr[aPos]);
        searchPath.pop(aPos);
    };

    search(start);

    return res;
};
