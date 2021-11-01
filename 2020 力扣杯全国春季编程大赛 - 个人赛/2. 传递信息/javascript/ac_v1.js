/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, relation, k) {
    let res = 0;
    let relationMap = new Map();
    let walk = (curr, step) => {
        let tar;
        
        if (step < 0) {
            return;
        } 
        if (step === 0 && curr === n - 1) {
            res++;
            return;
        }
        
        if (relationMap.has(curr)) {
            tar = relationMap.get(curr);
        } else {
            return;
        }

        for (let item of tar) {
            walk(item, step - 1);
        }
    };

    relation.forEach(aRelation => {
        if (relationMap.has(aRelation[0])) {
            relationMap.get(aRelation[0]).push(aRelation[1]);
        } else {
            relationMap.set(aRelation[0], [aRelation[1]]);
        }
        
    });

    walk(0, k);
    
    return res;
};
