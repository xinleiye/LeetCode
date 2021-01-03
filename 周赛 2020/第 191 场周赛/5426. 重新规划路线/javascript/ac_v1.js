/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let res = 0;
    let visited = new Array(n).fill(0);
    let roadSrcMap = new Map();
    let roadTarMap = new Map();
    let cities = [];

    connections.forEach(item => {
        if (roadSrcMap.has(item[0])) {
            roadSrcMap.get(item[0]).push(item[1]);
        } else {
            roadSrcMap.set(item[0], [item[1]]);
        }
        if (roadTarMap.has(item[1])) {
            roadTarMap.get(item[1]).push(item[0]);
        } else {
            roadTarMap.set(item[1], [item[0]]);
        }
    });

    cities.push(0);
    visited[0] = 1;
    while (cities.length) {
        let size = cities.length;

        for (let i = 0; i < size; i++) {
            let city = cities.shift();
            
            if (roadTarMap.has(city)) {
                roadTarMap.get(city).forEach(item => {
                    if (visited[item] === 0) {
                        visited[item] = 1;
                        cities.push(item);
                    }
                });
            }
            
            if (roadSrcMap.has(city)) {
                roadSrcMap.get(city).forEach(item => {
                    if (visited[item] === 0) {
                        visited[item] = 1;
                        res++;
                        cities.push(item);
                    }
                });
            }
        }
    }

    return res;
};
