/**
 * @param {string} kingName
 */
var ThroneInheritance = function(kingName) {
    this.king = kingName;
    this.parentMap = new Map();
    this.deathSet = new Set();
};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
    if (this.parentMap.has(parentName)) {
        this.parentMap.get(parentName).push(childName);
    } else {
        this.parentMap.set(parentName, [childName]);
    }
};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
    this.deathSet.add(name);
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
    let res = [];
    let getOrder = (name) => {
        if (!this.deathSet.has(name)) {
            res.push(name);
        }
        if (this.parentMap.has(name)) {
            let children = this.parentMap.get(name);

            children.forEach(child => {
                getOrder(child);
            })
        }
    }

    getOrder(this.king);

    return res;
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
