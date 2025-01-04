
var MyCalendar = function() {
    this.times = [];
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(startTime, endTime) {
    for (const [s, e] of this.times) {
        if (!(s >= endTime || e <= startTime)) {
            return false;
        }
    }
    this.times.push([startTime, endTime]);

    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */
