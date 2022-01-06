/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const names = path.split("/");
    const stack = [];

    names.forEach(item => {
        if (item === "..") {
            stack.pop();
        } else if (item.length && item !== ".") {
            stack.push(item);
        }
    });

    return `/${stack.join("/")}`;
};
