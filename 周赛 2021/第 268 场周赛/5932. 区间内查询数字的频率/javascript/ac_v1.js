/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function(arr) {
    const total = arr.length;
    let numIndexMap = new Map();

    for (let i = 0; i < total; i++) {
        const tar = arr[i];

        if (numIndexMap.has(tar)) {
            numIndexMap.get(tar).push(i);
        } else {
            numIndexMap.set(arr[i], [i]);
        }
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

    const indexs = this.numIndexMap.get(value);

    if (indexs[0] > right || indexs[indexs.length - 1] < left) {
        return 0;
    }

    const binarySearch = (arr, tar) => {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = (left + right) >>> 1;

            if (arr[mid] > tar) {
                right = mid - 1;
            } else if (arr[mid] < tar) {
                left = mid + 1;
            } else {
                return mid;
            }
        }

        return left - 1;
    };

    let leftIndex = binarySearch(indexs, left);
    let rightIndex = binarySearch(indexs, right);

    if (indexs[leftIndex] === left) {
        leftIndex--;
    }
    if (indexs[rightIndex] > right) {
        rightIndex--;
    }
    return rightIndex - leftIndex;
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */
