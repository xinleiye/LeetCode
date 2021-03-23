/**
 * @param {number} timeToLive
 */
 var AuthenticationManager = function(timeToLive) {
    this.liveTime = timeToLive;
    this.tokenIdMap = new Map();
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
    this.tokenIdMap.set(tokenId, currentTime);
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
    if (this.tokenIdMap.has(tokenId)) {
        const startTime = this.tokenIdMap.get(tokenId);

        if (startTime + this.liveTime > currentTime) {
            this.tokenIdMap.set(tokenId, currentTime);
        }
    }
    
    return null;
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
    let res = 0;

    this.tokenIdMap.forEach(time => {
        if (time + this.liveTime > currentTime) {
            res++;
        }
    });
    
    return res;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
