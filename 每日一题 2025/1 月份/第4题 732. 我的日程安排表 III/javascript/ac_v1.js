
var MyCalendarThree = function() {
    this.timeStamps = [];
    this.count = new Map();
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
MyCalendarThree.prototype.book = function(startTime, endTime) {
    let res = 0;
    let countSum = 0;

    if (this.count.has(startTime)) {
        this.count.set(startTime, this.count.get(startTime) + 1);
    } else {
        this.timeStamps.push(startTime);
        this.count.set(startTime, 1);
    }
    if (this.count.has(endTime)) {
        this.count.set(endTime, this.count.get(endTime) - 1);
    } else {
        this.timeStamps.push(endTime);
        this.count.set(endTime, -1);
    }
    this.timeStamps.sort((t1, t2) => t1 - t2);
    for (const t of this.timeStamps) {
        countSum += this.count.get(t);
        res = Math.max(res, countSum);
    }

    return res;
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(startTime,endTime)
 */
