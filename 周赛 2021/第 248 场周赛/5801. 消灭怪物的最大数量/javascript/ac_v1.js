/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    let res = 0;
    let maxTime = 0;
    let time = 0;
    const info = new Array(dist.length);
    const length = dist.length;

    for (let i = 0; i < length; i++) {
        maxTime = Math.max(maxTime, Math.ceil(dist[i] / speed[i]));
        info[i] = {
            dist: dist[i],
            speed: speed[i]
        };
    }
    info.sort((item1, item2) => {
        return Math.ceil(item1.dist / item1.speed) - Math.ceil(item2.dist / item2.speed);
    });

    for (let i = 0; i < length; i++) {
        const monster = info[i];

        if (monster.dist - monster.speed * time <= 0) {
            return res;
        } else {
            res++;
            time++;
        }
    }

    return res;
};
