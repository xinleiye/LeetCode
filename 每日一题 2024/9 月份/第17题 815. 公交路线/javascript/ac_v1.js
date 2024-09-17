/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    if (source === target) {
        return 0;
    }

    const total = routes.length;
    const lineMap = new Array(total).fill(0).map(() => new Array(total).fill(false));
    const siteMap = new Map();
    for (let i = 0; i < total; i++) {
        for (const site of routes[i]) {
            const list = (siteMap.get(site) || []);

            for (const j of list) {
                lineMap[i][j] = true;
                lineMap[j][i] = true;
            }
            list.push(i);
            siteMap.set(site, list);
        }
    }

    const dis = new Array(total).fill(-1);
    const queue = [];
    for (const bus of (siteMap.get(source) || [])) {
        dis[bus] = 1;
        queue.push(bus);
    }
    while (queue.length) {
        const i = queue.shift();

        for (let j = 0; j < total; j++) {
            if (lineMap[i][j] && dis[j] === -1) {
                dis[j] = dis[i] + 1;
                queue.push(j);
            }
        }
    }

    let res = Number.MAX_VALUE;
    for (const bus of (siteMap.get(target) || [])) {
        if (dis[bus] !== -1) {
            res = Math.min(res, dis[bus]);
        }
    }

    return res === Number.MAX_VALUE ? -1 : res;
};
