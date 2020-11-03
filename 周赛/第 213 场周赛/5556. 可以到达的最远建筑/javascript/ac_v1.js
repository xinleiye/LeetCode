/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    let usedBrickNum = 0;
    let priorityQueue = new PriorityQueue();

    for (let i = 1; i < heights.length; i++) {
        let diff = heights[i] - heights[i - 1];

        if (diff > 0) {
            priorityQueue.push(diff);
            if (priorityQueue.size() > ladders) {
                usedBrickNum += priorityQueue.pop();
                if (usedBrickNum > bricks) {
                    return i - 1;
                }
            }
        }
    }

    return heights.length - 1;
};

class PriorityQueue {
    constructor () {
        this.buffer = [];
    }
    push (val) {
        let index = 0;

        this.buffer.push(0);
        while (this.buffer[index] > val) {
            index++;
        }

        for (let i = this.buffer.length - 2; i >= index; i--) {
            this.buffer[i + 1] = this.buffer[i];
        }
        this.buffer[index] = val;
    }
    pop () {
        return this.buffer.pop();
    }
    size () {
        return this.buffer.length;
    }
};
