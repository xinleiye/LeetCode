/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    let res = 0;
    const inputArr = input.split("\n");
    const path = [];
    const isDir = (str) => str.indexOf(".") === -1;
    const parseDir = (dir) => {
        let deep = 0;
        while (dir[deep] === "\t") {
            deep++;
        }
        return {
            deep: deep,
            dirName: dir.substring(deep)
        };
    };

    while (inputArr.length) {
        const cur = inputArr.shift();
        const { deep, dirName } = parseDir(cur);

        if (isDir(cur)) {
            if (deep === path.length) {
                path.push(dirName);
            } else if (deep <= path.length) {
                while (path.length - deep > 0) {
                    path.pop();
                }
                path.push(dirName)
            }
        } else {
            while (path.length - deep > 0) {
                path.pop();
            }
            path.push(dirName);
            res = Math.max(res, path.join("/").length);
        }
    }

    return res;
};
