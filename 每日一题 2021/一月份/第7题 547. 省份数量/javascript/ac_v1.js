/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let res = 0;
    const maxLength = isConnected.length;
    const visited = new Array(maxLength).fill(false);
    const bfs = (start) => {
        let citys = [start];

        while (citys.length) {
            let curCity = citys.shift();

            visited[curCity] = true;
            isConnected[curCity].forEach((item, index) => {
                if (!visited[index] && item === 1) {
                    citys.push(index);
                }
            });
        }
    };

    for (let i = 0; i < maxLength; i++) {
        if (visited[i]) {
            continue;
        }
        res++;
        bfs(i);
    }

    return res;
};
