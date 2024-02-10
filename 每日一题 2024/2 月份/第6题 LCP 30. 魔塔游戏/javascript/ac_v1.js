/**
 * @param {number[]} nums
 * @return {number}
 */
var magicTower = function(nums) {
    const minQueue = new MinPriorityQueue();
    let res = 0;
    let hp = 1;
    let move = 0;

    for (const h of nums) {
        if (h < 0) {
            minQueue.enqueue(h);
        }
        hp += h;
        if (hp <= 0) {
            const front = minQueue.dequeue().element;

            res++;
            hp -= front;
            move += front
        }
    }
    hp += move;

    return hp <= 0 ? -1 : res;
};
