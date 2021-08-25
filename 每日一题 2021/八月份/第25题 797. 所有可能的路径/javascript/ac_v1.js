/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const res = [];
    const length = graph.length;
    const dfsSearch = (src, path) => {
        if (src === length - 1) {
            res.push([].concat(path));

            return;
        }

        const next = graph[src];

        for (const item of next) {
            path.push(item);
            dfsSearch(item, path);
            path.pop(item);
        }
    };

    dfsSearch(0, [0]);

    return res;
};
