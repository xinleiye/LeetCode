/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let res = 0;
    const total = costs.length;
    const queue = new PriorityQueue({
        compare: (e1, e2) => {
            if (e1.cost < e2.cost || (e1.cost === e2.cost && e1.index < e2.index)) {
                return -1;
            }
            return 1;
        }
    });
    let left = candidates - 1;
    let right = total - candidates;

    if (candidates * 2 < total) {
        for (let i = 0; i <= left; i++) {
            queue.enqueue({
                cost: costs[i],
                index: i
            });
        }
        for (let i = right; i < total; i++) {
            queue.enqueue({
                cost: costs[i],
                index: i
            });
        }
    } else {
        for (let i = 0; i < total; i++) {
            queue.enqueue({
                cost: costs[i],
                index: i
            });
        }
    }
    for (let i = 0; i < k; i++) {
        const { cost, index } = queue.dequeue();

        res += cost;
        if (left + 1 < right) {
            if (index <= left) {
                left++;
                queue.enqueue({
                    cost: costs[left],
                    index: left
                });
            } else {
                right--;
                queue.enqueue({
                    cost: costs[right],
                    index: right
                });
            }
        }
    }

    return res;
};
