/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
    this.liveTime = timeToLive;
    this.tokenIdMap = new Map();

    return null;
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
    this.tokenIdMap.set(tokenId, currentTime);

    return null;
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
    const map = this.tokenIdMap;

    if (map.has(tokenId) && map.get(tokenId) + this.liveTime > currentTime) {
        map.set(tokenId, currentTime);
    }

    return null;
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
    let res = 0;
    const times = this.tokenIdMap.values();
    const liveTime = this.liveTime;

    for (const t of times) {
        if (t + liveTime > currentTime) {
            res++;
        }
    }

    return res;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
