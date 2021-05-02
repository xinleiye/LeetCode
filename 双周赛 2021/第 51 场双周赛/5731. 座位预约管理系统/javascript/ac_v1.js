/**
 * @param {number} n
 */
 var SeatManager = function(n) {
    this.totalSeat = n;
    this.seatStatus = new Array(n + 1).fill(true);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    let index = 1;

    while(index <= this.totalSeat && !this.seatStatus[index]) {
        index++;
    }
    this.seatStatus[index] = false;
    return index;
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    this.seatStatus[seatNumber] = true;
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
