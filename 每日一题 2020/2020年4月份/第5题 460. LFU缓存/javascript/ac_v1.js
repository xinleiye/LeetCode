/**
 * @param {number} capacity
 */
function Node (key, val, freq) {
    this.key = key;
    this.val = val;
    this.freq = freq ? freq : 1;
}

function updateFreqMap (map, node, oldFreq) {
    let nodeList;

    if (oldFreq && map.has(oldFreq)) {
        nodeList = map.get(oldFreq);
        if (nodeList.length === 1) {
            map.delete(oldFreq);
        } else {
            let index;

            for (let i = 0; i < nodeList.length; i++) {
                if (nodeList[i].key === node.key) {
                    index = i;
                    break;
                }
            }
            nodeList.splice(index, 1);
        }
    }
    if (map.has(node.freq)) {
        map.get(node.freq).push(node);
    } else {
        map.set(node.freq, [node]);
    }
}

var LFUCache = function(capacity) {
    this.maxSize = capacity > 0 ? capacity : 0;
    this.keyMap = new Map();
    this.minFreq = 0;
    this.freqMap = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    let node;

    if (this.maxSize === 0) {
        return -1;
    }
    if (this.keyMap.has(key)) {
        let freq;

        node = this.keyMap.get(key);
        freq = node.freq;
        node.freq++;

        if (this.freqMap.get(freq).length === 1) {
            if (freq === this.minFreq) {
                this.minFreq++;
            }
        }
        updateFreqMap(this.freqMap, node, freq);

        return node.val;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    let node;

    if (this.maxSize === 0) {
        return 0;
    }
    if (this.keyMap.has(key)) {
        let freq;
        
        node = this.keyMap.get(key);
        freq = node.freq;

        node.val = value;
        node.freq++;

        if (this.freqMap.get(freq).length === 1) {
            if (freq === this.minFreq) {
                this.minFreq++;
            }
        }

        updateFreqMap(this.freqMap, node, freq);
    } else {
        node = new Node(key, value, 1);

        if (this.keyMap.size < this.maxSize) {
            this.keyMap.set(key, node);
            updateFreqMap(this.freqMap, node);
        } else {
            this.keyMap.delete(this.freqMap.get(this.minFreq)[0].key);
            this.keyMap.set(key, node);
            updateFreqMap(this.freqMap, node, this.minFreq);
        }

        this.minFreq = 1;
    }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */