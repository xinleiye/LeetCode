
var DetectSquares = function() {
    const MAX = 1001;
    const buff = new Array(MAX);

    for (let i = 0; i < MAX; i++) {
        buff[i] = new Array(MAX).fill(0);
    }

    this.map = buff;
    this.xMap = new Map();
    this.yMap = new Map();
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    const x = point[0];
    const y = point[1];

    this.map[x][y]++;
    if (this.xMap.has(x)) {
        this.xMap.get(x).push(y);
    } else {
        this.xMap.set(x, [y]);
    }
    if (this.yMap.has(y)) {
        this.yMap.get(y).push(x);
    } else {
        this.yMap.set(y, [x]);
    }

    return null;
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    let res = 0;
    const x = point[0];
    const y = point[1];

    if (!this.xMap.has(x) || !this.yMap.has(y)) {
        return 0;
    }

    const xs = this.yMap.get(y);
    const ys = this.xMap.get(x);

    for (let i = 0; i < xs.length; i++) {
        const x1 = xs[i];

        for (let j = 0; j < ys.length; j++) {
            const y1 = ys[j];

            if (Math.abs(x - x1) === Math.abs(y - y1)) {
                res += this.map[x1][y1];
            }
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
