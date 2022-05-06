var RecentCounter = function() {
    this.time = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.time.push(t);
    const index = binarySearch(this.time, t - 3000);
    return this.time.length - index;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

function binarySearch (arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = (left + right) >>> 1;

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}
