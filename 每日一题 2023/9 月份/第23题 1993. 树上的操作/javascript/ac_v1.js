/**
 * @param {number[]} parent
 */
const LOCK = 1;
const UNLOCK = 0;
const INVALID_PARENT = -1;
const INVALID_USER = -1;
var LockingTree = function(parent) {
    const total = parent.length;
    const treeArr = new Array(total);

    for (let i = 0; i < total; i++) {
        treeArr[i] = new TreeNode(i);
    }
    for (let i = 1; i < total; i++) {
        treeArr[i].parent = parent[i];
        treeArr[parent[i]].children.push(i);
    }

    this.tree = treeArr;
};

/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.lock = function(num, user) {
    const node = this.tree[num];

    if (node.status === UNLOCK) {
        node.status = LOCK;
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
    const node = this.tree[num];

    if (node.status === LOCK && node.user === user) {
        node.status = UNLOCK;
        node.user = INVALID_USER;

        return true;
    }

    return false;
};

/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.upgrade = function(num, user) {
    const curNode = this.tree[num];
    if (curNode.status === LOCK) {
        return false;
    }

    let parent = curNode.parent;
    while (parent !== INVALID_USER) {
        if (this.tree[parent].status === LOCK) {
            return false;
        }
        parent = this.tree[parent].parent;
    }

    const lockedChildren = [];
    const dfsSearch = (val, tree, arr) => {
        for (const n of tree[val].children) {
            if (tree[n].status === LOCK) {
                arr.push(n);
            }
            dfsSearch(n, tree, arr);
        }
    };
    dfsSearch(num, this.tree, lockedChildren);
    if (lockedChildren.length === 0) {
        return false;
    }

    curNode.status = LOCK;
    curNode.user = user;
    for (const n of lockedChildren) {
        this.tree[n].status = UNLOCK;
        this.tree[n].user = INVALID_USER;
    }

    return true;
};

/**
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */

function TreeNode(value) {
    this.value = value;
    this.user = INVALID_USER;
    this.status = UNLOCK;
    this.parent = INVALID_PARENT;
    this.children = [];
}
