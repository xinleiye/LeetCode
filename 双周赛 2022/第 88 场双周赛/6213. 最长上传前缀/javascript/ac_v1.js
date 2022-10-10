/**
 * @param {number} n
 */
var LUPrefix = function(n) {
    this.uploaded = new Array(n + 1).fill(false);
    this.curLongest = [];
};

/** 
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function(video) {
    this.uploaded[video] = true;
    if (video === this.curLongest.length + 1) {
        while (this.uploaded[video]) {
            this.curLongest.push(video);
            video++;
        }
    }
};

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function() {
    return this.curLongest.length;
};

/**
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */
