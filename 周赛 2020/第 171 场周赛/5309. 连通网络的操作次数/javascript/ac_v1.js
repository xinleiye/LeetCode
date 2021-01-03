/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    let res = 0;
    let connectMap = new Map();
    let connected = new Array(n);
    let getConnectedPc = (connMap, conn, start) => {
        for (let item of connMap.get(start)) {
            if (conn[item] === 0) {
                conn[item] = 1;
                getConnectedPc(connMap, conn, item);
            }
        }
    };

    if (connections.length < n - 1) {
        return -1;
    }

    for (let i = 0; i < n; i++) {
        connectMap.set(i, []);
    }

    for (let i = 0; i < connections.length; i++) {
        connectMap.get(connections[i][0]).push(connections[i][1]);
        connectMap.get(connections[i][1]).push(connections[i][0]);
    }

    connected.fill(0);
    for (let i = 0; i < n; i++) {
        if (connected[i] === 0) {
            res++;
            getConnectedPc(connectMap, connected, i);
        }
    }

    return res - 1;
};
