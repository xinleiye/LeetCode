var DetectSquares = function() {
    this.pointMap = new Map();
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    const [x, y] = point;

    if (!this.pointMap.has(y)) {
        this.pointMap.set(y, new Map());
    }

    const yMap = this.pointMap.get(y);

    yMap.set(x, (yMap.get(x) || 0) + 1);
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    let res = 0;
    const [x0, y0] = point;

    if (!this.pointMap.has(y0)) {
        return res;
    }

    const y0Map = this.pointMap.get(y0);

    for (const [y1, y1Map] of this.pointMap.entries()) {
        if (y1 !== y0) {
            const len = y1 - y0;

            // (x0, y0) 的正上方 * 右边 * 右上
            res += (y1Map.get(x0) || 0) * (y0Map.get(x0 + len) || 0) * (y1Map.get(x0 + len) || 0);
            // (x0, y0) 的正上方 * 左边 * 左上
            res += (y1Map.get(x0) || 0) * (y0Map.get(x0 - len) || 0) * (y1Map.get(x0 - len) || 0);
        }
    }

    return res;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
