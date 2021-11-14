/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
    this.direction = ['East', 'North', 'West', 'South'];
    this.width = width - 1;
    this.height = height - 1;
    this.posX = 0;
    this.posY = 0;
    this.dir = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.move = function(num) {
    let x = 0;
    let y = 0;

    while (num > 0) {
        const dir = this.dir % 4;

        switch(dir) {
            case 0:
                x = this.posX + num;
                if (x > this.width) {
                    num -= (this.width - this.posX);
                    this.posX = this.width;
                    this.dir++;
                } else {
                    num = 0;
                    this.posX = x;
                }
                break;
            case 1:
                y = this.posY + num;
                if (y > this.height) {
                    num -= (this.height - this.posY);
                    this.posY = this.height;
                    this.dir++;
                } else {
                    num = 0;
                    this.posY = y;
                }
                break;
            case 2:
                x = this.posX - num;
                if (x < 0) {
                    num -= this.posX;
                    this.posX = 0;
                    this.dir++;
                } else {
                    num = 0;
                    this.posX = x;
                }
                break;
            case 3:
                y = this.posY - num;
                if (y < 0) {
                    num -= this.posY;
                    this.posY = 0;
                    this.dir++;
                } else {
                    num = 0;
                    this.posY = y;
                }
                break;
            default:
                break;
        }
    }
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
    return [this.posX, this.posY];
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
    return this.direction[this.dir % 4];
};

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.move(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */
