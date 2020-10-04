/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.totalBig = big;
    this.totalMedium = medium;
    this.totalSmall = small;
    this.currentBig = 0;
    this.currentMedium = 0;
    this.currentSmall = 0;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    let res = false;

    switch (carType) {
        case 1:
            if (this.currentBig >= this.totalBig) {
                res = false;
            } else {
                res = true;
                this.currentBig++;
            }
            break;
        case 2:
            if (this.currentMedium >= this.totalMedium) {
                res = false;
            } else {
                res = true;
                this.currentMedium++;
            }
            break;
        case 3:
            if (this.currentSmall >= this.totalSmall) {
                res = false;
            } else {
                res = true;
                this.currentSmall++;
            }
            break;
        default:
            res = false;
            break;
    }
    
    return res;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
