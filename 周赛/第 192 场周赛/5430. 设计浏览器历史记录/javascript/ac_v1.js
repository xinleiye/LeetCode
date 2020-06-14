/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.urlBuf = new Array();
    this.urlBuf.push(homepage);
    this.currentUrlIndex = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    for (let i = this.currentUrlIndex + 1, len = this.urlBuf.length; i < len; i++) {
        this.urlBuf.pop(url);
    }
    this.urlBuf.push(url);
    this.currentUrlIndex = this.urlBuf.length - 1;

    return null;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) { 
    if (this.currentUrlIndex <= steps) {
        this.currentUrlIndex = 0;
    } else {
        this.currentUrlIndex -= steps;
    }

    return this.urlBuf[this.currentUrlIndex];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    if (this.currentUrlIndex + steps >= this.urlBuf.length) {
        this.currentUrlIndex = this.urlBuf.length - 1;
    } else {
        this.currentUrlIndex += steps;
    }
    return this.urlBuf[this.currentUrlIndex];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */