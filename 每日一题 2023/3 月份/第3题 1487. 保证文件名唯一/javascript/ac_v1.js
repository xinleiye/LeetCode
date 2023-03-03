/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
    const total = names.length;
    const res = new Array(total);
    const nameMap = new Map();

    for (let i = 0; i < total; i++) {
        const name = names[i];

        if (!nameMap.has(name)) {
            res[i] = name;
            nameMap.set(name, 1);
        } else {
            let index = nameMap.get(name);
            let newName = generateName(name, index);

            while (nameMap.has(newName)) {
                index++;
                newName = generateName(name, index);
            }
            res[i] = newName;
            nameMap.set(name, index + 1);
            nameMap.set(newName, 1);
        }
    }

    return res;
};

function generateName (name, index) {
    return `${name}(${index})`;
}
