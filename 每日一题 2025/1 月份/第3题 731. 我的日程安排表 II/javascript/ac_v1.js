
var MyCalendarTwo = function() {
    this.bookList = [];
    this.overlaps = [];
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(startTime, endTime) {
    for (const [s, e] of this.overlaps) {
        if (s < endTime && e > startTime) {
            return false;
        }
    }
    for (const [s, e] of this.bookList) {
        if (s < endTime && e > startTime) {
            this.overlaps.push([Math.max(s, startTime), Math.min(e, endTime)]);
        }
    }
    this.bookList.push([startTime, endTime]);

    return true;
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */
