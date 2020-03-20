
class minHeap {
    constructor (size) {
        if (typeof size === "number") {
            this.maxSize = size + 1;
        } else {
            this.maxSize = Infinity;
        }
        this.heap = [0];
        this.currentSize = 0;
    };
    size () {
        return this.currentSize;
    }
    top () {
        return this.currentSize > 0 ? this.heap[1] : null;
    }
    push (val) {
        let current;
        let parent;

        if (this.currentSize > this.maxSize) {
            return false;
        }

        this.heap.push(val);
        this.currentSize++;

        current = this.currentSize;
        parent = Math.floor(current / 2);
        while (true) {
            // 当前节点为根节点
            if (current === 1) {
                break;
            }

            // 若当前节点小于父节点，开始交换
            if (this.heap[parent] > this.heap[current]) {
                let tmp = this.heap[parent];

                this.heap[parent] = this.heap[current];
                this.heap[current] = tmp;

                current = parent;
                parent = Math.floor(current / 2);
            } else {
                break;
            }
        }

        return true;
    }
    pop () {
        let res;
        let child;
        let current;
        
        if (this.currentSize > 0) {
            res = this.heap[1];
        } else {
            return null;
        }

        this.heap[1] = this.heap[this.currentSize];
        this.heap.pop();
        this.currentSize--;

        current = 1;
        while (true) {
            let tmpVal;

            // 当前为叶子节点
            if (current >= this.heap.length / 2) {
                break;
            }

            // 当前节点小于子节点
            if (this.currentSize >= current * 2 + 1) {
                if (this.heap[current] < this.heap[current * 2] && this.heap[current] < this.heap[current * 2 + 1]) {
                    break;
                }
                // 当前节点与子结点中，较小的进行交换
                if (this.heap[current * 2] < this.heap[current * 2 + 1]) {
                    child = current * 2;
                } else {
                    child = current * 2 + 1;
                }
            } else if (this.currentSize >= current * 2) {
                if (this.heap[current] < this.heap[current * 2]) {
                    break;
                }
                child = current * 2;
            } else {
                break;
            }

            tmpVal = this.heap[current];
            this.heap[current] = this.heap[child];
            this.heap[child] = tmpVal;

            // 更新当前节点
            current = child;
        }

        return res;
    }
}
