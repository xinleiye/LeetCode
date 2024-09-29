/**
 * @param {number} n
 */
var SeatManager = function(n) {
    const minQueue = new MinPriorityQueue();

    for (let i = 1; i <= n; i++) {
        minQueue.enqueue(i);
    }
    this.minQueue = minQueue;
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    return this.minQueue.dequeue().element;
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    this.minQueue.enqueue(seatNumber);
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
