/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function(source, target, allowedSwaps) {
    let res = 0;
    const swapMap = new Map();
    let swapGroups;
    const visited = new Array(source.length).fill(false);
    const getGroups = (map, visited) => {
        const groups = [];
        const dfs = (cur, buff) => {
            let next;

            buff.push(cur);
            visited[cur] = true;
            if (!map.has(cur)) {
                return;
            }
            next = map.get(cur);
            for (let i = 0; i < next.length; i++) {
                if (!visited[next[i]]) {
                    dfs(next[i], buff);
                }
            }
        }

        map.forEach((val, key) => {
            let group = [];

            if (!visited[key]) {
                dfs(key, group);
            }
            if (group.length) {
                groups.push(group);
            }
        });

        return groups;
    };
    const getHammingDistance = (src, tar, indexs) => {
        let srcMap = new Map();

        for (let i = 0; i < indexs.length; i++) {
            let num = src[indexs[i]];
    
            if (srcMap.has(num)) {
                srcMap.set(num, srcMap.get(num));
            } else {
                srcMap.set(num, 1);
            }
        }
        for (let i = 0; i < indexs.length; i++) {
            let num = tar[indexs[i]];
            
            if (srcMap.has(num)) {
                let count = srcMap.get(num);
                
                if (count === 1) {
                    srcMap.delete(num);
                } else {
                    srcMap.set(num, count - 1);
                }
            }
        }
        
        return srcMap.size;
    };

    allowedSwaps.forEach(item => {
        if (swapMap.has(item[0])) {
            swapMap.get(item[0]).push(item[1]);
        } else {
            swapMap.set(item[0], [item[1]]);
        }
        if (swapMap.has(item[1])) {
            swapMap.get(item[1]).push(item[0]);
        } else {
            swapMap.set(item[1], [item[0]]);
        }
    });

    swapGroups = getGroups(swapMap, visited);

    for (let i = 0; i < swapGroups.length; i++) {
        res += getHammingDistance(source, target, swapGroups[i]);
    }

    for (let i = 0; i < source.length; i++) {
        if (!visited[i] && source[i] !== target[i]) {
            res++;
        }
    }

    return res;
};
