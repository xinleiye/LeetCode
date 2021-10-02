/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let res;
    const cityPath = new Map();

    paths.forEach((path) => {
        const start = path[0];
        const end = path[1];

        if (cityPath.has(start)) {
            cityPath.get(start).out++;
        } else {
            cityPath.set(start, {
                out: 1,
                in: 0
            });
        }
        if (cityPath.has(end)) {
            cityPath.get(end).in++;
        } else {
            cityPath.set(end, {
                out: 0,
                in: 1
            });
        }
    });

    cityPath.forEach((val, key) => {
        if (val.out === 0) {
            res = key;
        }
    });

    return res;
};
