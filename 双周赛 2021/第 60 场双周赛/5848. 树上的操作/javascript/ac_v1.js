/**
 * @param {number[]} parent
 */
var LockingTree = function(parent) {
    const nodeMap = new Map();

    for (let i = 0; i < parent.length; i++) {
        nodeMap.set(i, {
            val: i,
            status: 0,
            user: 0,
            parent: null,
            children: []
        });
    }
    for (let i = 1; i < parent.length; i++) {
        const curNode = nodeMap.get(i);
        const pNode = nodeMap.get(parent[i]);

        curNode.parent = pNode;
        pNode.children.push(curNode);
    }

    this.nodeMap = nodeMap;
};

/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.lock = function(num, user) {
    const node = this.nodeMap.get(num);

    if (node.status === 0) {
        node.status = 1;
        node.user = user;

        return true;
    }

    return false;
};

/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.unlock = function(num, user) {
    const node = this.nodeMap.get(num);
    
    if (node.status === 1) {
        if (node.user === user) {
            node.status = 0;
            node.user = 0;

            return true;
        }
    }

    return false;
};

/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.upgrade = function(num, user) {
    const curNode = this.nodeMap.get(num);
    const lockedChildren = [];
    const dfs = (nodeVal) => {
        const ch = this.nodeMap.get(nodeVal).children;
        
        for (let item of ch) {
            if (item.status === 1) {
                lockedChildren.push(item);
            }
            dfs(item.val);
        }
    };
    // 指定节点当前上锁状态。
    if (curNode.status === 1) {
        return false;
    }
    // 子节点上锁状态
    dfs(curNode.val);
    if (lockedChildren.length === 0) {
        return false;
    }
    // 祖先节点上锁状态
    let pNode = curNode.parent;

    while (pNode) {
        if (pNode.status === 1) {
            return false;
        }
        pNode = pNode.parent;
    }
    
    // upgrade
    curNode.status = 1;
    curNode.user = user;
    lockedChildren.forEach(item => {
        item.status = 0
        item.user = 0;
    });
    
    return true;
};

/**
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */
