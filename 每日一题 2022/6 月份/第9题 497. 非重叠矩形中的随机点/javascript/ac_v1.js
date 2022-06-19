function binarySearch (arr, target) {
    let left = 1;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] > target) {
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return left;
}

/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    this.rects = rects;
    
    const arr = new Array(rects.length + 1).fill(0);
    const total = rects.length;
    for (let i = 0; i < total; i++) {
        arr[i + 1] = arr[i] + (rects[i][2] - rects[i][0] + 1) * (rects[i][3] - rects[i][1] + 1);
    }
    this.pointCount = arr;
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    let point = Math.floor(Math.random() * (this.pointCount[this.pointCount.length - 1]));
    const index = binarySearch(this.pointCount, point + 1) - 1;

    point -= this.pointCount[index];

    const [a, b, x] = this.rects[index];
    const col = x - a + 1;
    const dRow = Math.floor(point / col);
    const dCol = point - dRow * col;

    return [a + dCol, b + dRow];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
