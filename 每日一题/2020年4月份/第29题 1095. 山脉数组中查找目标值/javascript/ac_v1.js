/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let length = mountainArr.length();
    let left = 0;
    let right = length - 1;
    let maxIndex = 0;
    let maxVal = -1;
    let valBuf = new Array(length).fill(-1);

    while (left <= right) {
        let mid = (left + right) >>> 1;
        let num1 = mountainArr.get(mid);
        let num2 = mountainArr.get(mid + 1);

        valBuf[mid] = num1;
        valBuf[mid + 1] = num2;
        if (num1 < num2) {
            left = mid + 1 + 1;
            if (num2 > maxVal) {
                maxVal = num2;
                maxIndex = mid + 1;
            }
        } else {
            right = mid - 1;
            if (num1 > maxVal) {
                maxVal = num1;
                maxIndex = mid;
            }
        }
    }

    left = 0;
    right = maxIndex;
    while (left <= right) {
        let mid = (left + right) >>> 1;
        let num = valBuf[mid] === -1 ? mountainArr.get(mid) : valBuf[mid];

        if (target === num) {
            return mid;
        }
        if (target < num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    left = maxIndex;
    right = length - 1;
    while (left <= right) {
        let mid = (left + right) >>> 1;
        let num = valBuf[mid] === -1 ? mountainArr.get(mid) : valBuf[mid];

        if (target === num) {
            return mid;
        }
        if (target > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
};
