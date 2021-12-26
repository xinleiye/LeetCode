/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const res = [];
    const supplySet = new Set();
    const recipeMap = new Map();
    let cooked = 0;

    recipes.forEach((item, index) => {
        recipeMap.set(item, index);
    });
    supplies.forEach(item => {
        supplySet.add(item);
    });
    while (cooked !== recipeMap.size) {
        cooked = recipeMap.size;
        recipeMap.forEach((index, item) => {
            let flag = true;

            for (let item of ingredients[index]) {
                if (!supplySet.has(item)) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                supplySet.add(item);
                res.push(item);
                recipeMap.delete(item);
            }
        });
    }

    return res;
};
