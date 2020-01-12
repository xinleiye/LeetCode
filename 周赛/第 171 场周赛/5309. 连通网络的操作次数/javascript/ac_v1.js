/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    let res = 0;
    let connectMap = new Array(n);

    if (connections.length < n - 1) {
        return -1;
    }

    for (let i = 0; i < n; i++) {
        connectMap[i] = (new Array(n)).fill(0);
    }

    for (let i = 0; i < connections.length; i++) {
        connectMap[connections[i][0]][connections[i][1]] = 1;
        connectMap[connections[i][1]][connections[i][0]] = 1;
    }
    console.log(connectMap);
    for (let i = 0; i < n; i++) {
        let connected = false;

        console.log("=============");
        for (let j = i + 1; j < n; j++) {
            console.log(i, j, connectMap[i][j], connectMap[j][i]);
            if (connectMap[i][j] || connectMap[j][i]) {
                connected = true;
                break;
            }
        }
        if (!connected) {
            console.log(i);
            res++;
        }
    }

    return res;
};
