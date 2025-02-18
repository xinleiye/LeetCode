/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function(arr) {
    const total = arr.length;
    let numIndexMap = new Map();

    for (let i = 0; i < total; i++) {
        const num = arr[i];

        if (!numIndexMap.has(num)) {
            numIndexMap.set(num, []);
        }
        numIndexMap.get(num).push(i);
    }

    this.numIndexMap = numIndexMap;
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
    if (!this.numIndexMap.has(value)) {
        return 0;
    }

    const arr = this.numIndexMap.get(value);

    return highBound(arr, right) - lowerBound(arr, left);
};

function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = (left + right) >>> 1;

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

function highBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = (left + right) >>> 1;

        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

/** 
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */
