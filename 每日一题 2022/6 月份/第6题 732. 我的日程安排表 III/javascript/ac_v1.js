var MyCalendarThree = function() {
    this.map = new Map();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    let res = 0;
    let max = 0;
    const calender = [];

    this.map.set(start, (this.map.get(start) || 0) + 1);
    this.map.set(end, (this.map.get(end) || 0) - 1);
    this.map.forEach((val, key) => {
        calender.push([key, val]);
    });
    calender.sort((c1, c2) => c1[0] - c2[0]);
    for (const c of calender) {
        max += c[1];
        res = Math.max(res, max);
    }

    return res;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
