/**
 * @param {number} memoryLimit
 */
var Router = function(memoryLimit) {
    this.limit = memoryLimit;
    this.packetSet = new Set();
    this.packetQueue = [];
    this.packetMap = new Map();
};

/** 
 * @param {number} source 
 * @param {number} destination 
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function(source, destination, timestamp) {
    const curTag = `${destination}#${source}#${timestamp}`;
    if (this.packetSet.has(curTag)) {
        return false;
    }
    if (this.packetQueue.length >= this.limit) {
        const [s, d, t] = this.packetQueue.shift();
        this.packetSet.delete(`${d}#${s}#${t}`);
        this.packetMap.get(d).shift();
    }
    this.packetQueue.push([source, destination, timestamp]);
    this.packetSet.add(curTag);
    if (!this.packetMap.has(destination)) {
        this.packetMap.set(destination, []);
    }
    this.packetMap.get(destination).push(timestamp);

    return true;
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function() {
    if (!this.packetQueue.length) {
        return [];
    }

    const packet = this.packetQueue.shift();
    this.packetMap.get(packet[1]).shift();
    this.packetSet.delete(`${packet[1]}#${packet[0]}#${packet[2]}`)

    return packet;
};

/** 
 * @param {number} destination 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function(destination, startTime, endTime) {
    if (!this.packetMap.has(destination)) {
        return 0;
    }

    const times = this.packetMap.get(destination);

    return binarySearch(times, endTime + 1) - binarySearch(times, startTime);
};

/** 
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */

function binarySearch(arr, tar) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        const mid = (left + right) >>> 1;
        if (arr[mid] < tar) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return right;
}
