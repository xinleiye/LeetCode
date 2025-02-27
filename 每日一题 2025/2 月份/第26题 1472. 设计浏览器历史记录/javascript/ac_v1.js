/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.urlCache = [homepage];
    this.curUrlIndex = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    for (let i = this.urlCache.length - 1; i > this.curUrlIndex; i--) {
        this.urlCache.pop();
    }
    this.urlCache.push(url);
    this.curUrlIndex = this.urlCache.length - 1;

    return null
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.curUrlIndex = steps > this.curUrlIndex ? 0 : this.curUrlIndex - steps;

    return this.urlCache[this.curUrlIndex];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.curUrlIndex = steps + this.curUrlIndex >= this.urlCache.length ? this.urlCache.length - 1 : this.curUrlIndex + steps;
    return this.urlCache[this.curUrlIndex];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
