var MyCalendar = function() {
    this.times = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    const times = this.times;

    for (let [s, e] of times) {
        if (!(s >= end || e <= start)) {
            return false;
        }
    }
    times.push([start, end]);

    return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
