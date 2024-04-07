/**
 * @param {string} kingName
 */
var ThroneInheritance = function(kingName) {
    this.root = kingName;
    this.map = new Map();
    this.dead = new Set();
};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
    if (this.map.has(parentName)) {
        this.map.get(parentName).push(childName);
    } else {
        this.map.set(parentName, [childName]);
    }
};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
    this.dead.add(name);
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
    const res = [];
    const dfsSearch = (map, dead, name, arr) => {
        if (!dead.has(name)) {
            arr.push(name);
        }
        if (map.has(name)) {
            const next = map.get(name);

            for (const n of next) {
                dfsSearch(map, dead, n, arr);
            }
        }
    };

    dfsSearch(this.map, this.dead, this.root, res);

    return res;
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
