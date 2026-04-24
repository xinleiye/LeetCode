/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
    this.dirMap = ["East", "North", "West", "South"];
    this.index = 0;
    this.pos = [];
    this.dir = [];
    this.moved = false;

    for (let i = 0; i < width; i++) {
        this.pos.push([i, 0]);
        this.dir.push(0);
    }
    for (let i = 1; i < height; i++) {
        this.pos.push([width - 1, i]);
        this.dir.push(1);
    }
    for (let i = width - 2; i >= 0; i--) {
        this.pos.push([i, height - 1]);
        this.dir.push(2);
    }
    for (let i = height - 2; i > 0; i--) {
        this.pos.push([0, i]);
        this.dir.push(3);
    }
    this.dir[0] = 3;
};

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {
    this.moved = true;
    this.index = (this.index + num) % this.pos.length;
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
    return this.pos[this.index];
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
    return this.moved ? this.dirMap[this.dir[this.index]] : "East";
};

/** 
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */
