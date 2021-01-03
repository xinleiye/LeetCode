
var UndergroundSystem = function() {
    this.checkInMap = new Map();
    this.stationTimeMap = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkInMap.set(id, [stationName, t]);
    if (!this.stationTimeMap.has(stationName)) {
        this.stationTimeMap.set(stationName, new Map());
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    if (this.checkInMap.has(id)) {
        let checkInInfo = this.checkInMap.get(id);

        if (this.stationTimeMap.get(checkInInfo[0]).has(stationName)) {
            this.stationTimeMap.get(checkInInfo[0]).get(stationName).push(t - checkInInfo[1]);
        } else {
            this.stationTimeMap.get(checkInInfo[0]).set(stationName, [t - checkInInfo[1]]);
        }

        this.checkInMap.delete(id);
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let totalTime = 0;
    let times = this.stationTimeMap.get(startStation).get(endStation);

    for (let time of times) {
        totalTime += time;
    }

    return totalTime / times.length;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
