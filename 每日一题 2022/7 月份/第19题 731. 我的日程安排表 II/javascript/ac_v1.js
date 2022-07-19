var MyCalendarTwo = function() {
    this.bookList = [];
    this.overlaps = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    for (const [s, e] of this.overlaps) {
        if (s < end && e > start) {
            return false;
        }
    }
    for (const [s, e] of this.bookList) {
        if (s < end && e > start) {
            this.overlaps.push([Math.max(s, start), Math.min(e, end)]);
        }
    }
    this.bookList.push([start, end]);

    return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
