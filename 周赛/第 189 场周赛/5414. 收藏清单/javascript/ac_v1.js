/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function(favoriteCompanies) {
    let res = [];
    let length = favoriteCompanies.length;
    let sortedIndex = new Array(favoriteCompanies.length);
    let getParent = (index) => {
        let isParent = true;
        let child = favoriteCompanies[sortedIndex[index]];

        for (let j = index + 1; j < length; j++) {
            let parent = favoriteCompanies[sortedIndex[j]];

            isParent = true;
            for (let k = 0; k < child.length; k++) {
                if (parent.indexOf(child[k]) < 0) {
                    isParent = false;
                    break;
                }
            }
            if (isParent) {
                return sortedIndex[j];
            }
        }

        return -1;
    };
    
    for (let i = 0; i < length; i++) {
        sortedIndex[i] = i;
    }
    
    sortedIndex.sort((index1, index2) => {
        return favoriteCompanies[index1].length - favoriteCompanies[index2].length;
    });

    for (let i = 0; i < length; i++) {
        if (getParent(i) === -1) {
            res.push(sortedIndex[i])
        }
    }

    return res.sort((val1, val2) => {
        return val1 - val2;
    });
};
