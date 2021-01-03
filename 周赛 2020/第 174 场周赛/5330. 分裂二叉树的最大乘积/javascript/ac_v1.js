
var TweetCounts = function() {
    this.countsMap = new Map();
};

/** 
 * @param {string} tweetName 
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
    if (this.countsMap.has(tweetName)) {
        let record = this.countsMap.get(tweetName);

        record.push(time);
        record.sort((val1, val2) => {
            return val1 - val2;
        });
    } else {
        this.countsMap.set(tweetName, [time]);
    }
};

/** 
 * @param {string} freq 
 * @param {string} tweetName 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function(freq, tweetName, startTime, endTime) {
    let ret = [];
    let records = this.countsMap.get(tweetName);
    let times = [];
    let getTimes = (freq, startTime, endTime) => {
        let times = [];
        let delta, index, end;

        if (freq === "minute") {
            delta = 60;
        } else if (freq === "hour") {
            delta = 3600;
        } else if (freq === "day") {
            delta = 86400;
        }

        end = 0;
        index = 0;
        while (end <= endTime) {
            end = startTime + delta * (index + 1);
            times.push([startTime + delta * index, Math.min(end, endTime + 1)]);
            index++;
        }

        return times;
    };

    times = getTimes(freq, startTime, endTime);

    for (let item of times) {
        let recordCounts = 0;

        for (let i = 0, len = records.length; i < len; i++) {
            if (records[i] >= item[1]) {
                break;
            } else if (records[i] < item[0]) {
                continue;
            } else {
                recordCounts++;
            }
        }
        ret.push(recordCounts);
    }

    return ret;
};

/** 
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */
