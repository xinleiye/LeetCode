
var FrequencyTracker = function() {
    this.numMap = new Map();
    this.freqMap = new Map();
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
    const numMap = this.numMap;
    let freq = numMap.has(number) ? numMap.get(number) : 0;
    numMap.set(number, freq + 1);

    const freqMap = this.freqMap;
    let freqCount = freqMap.has(freq) ? freqMap.get(freq) : 0;
    if (freqCount === 1) {
        freqMap.delete(freq);
    }
    if (freqCount > 1) {
        freqMap.set(freq, freqCount - 1);
    }
    freqCount = freqMap.has(freq + 1) ? freqMap.get(freq + 1) : 0;
    freqMap.set(freq + 1, freqCount + 1);
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
    const numMap = this.numMap;
    let freq = numMap.has(number) ? numMap.get(number) : 0;
    if (freq === 0) {
        return null;
    }
    if (freq === 1) {
        numMap.delete(number);
    } else {
        numMap.set(number, freq - 1);
    }

    const freqMap = this.freqMap;
    let freqCount = freqMap.get(freq);
    if (freqCount === 1) {
        freqMap.delete(freq);
    }
    if (freqCount > 1) {
        freqMap.set(freq, freqCount - 1);
    }
    freqCount = freqMap.has(freq - 1) ? freqMap.get(freq - 1) : 0;
    freqMap.set(freq - 1, freqCount + 1);
};

/** 
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
    return this.freqMap.has(frequency);
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
