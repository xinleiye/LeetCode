/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    const memo = new Map();
    const length = price.length;
    const filterSpecial = [];
    const dfs = (curNeeds) => {
        if (!memo.has(curNeeds)) {
            let minPrice = 0;

            for (let i = 0; i < length; i++) {
                minPrice += curNeeds[i] * price[i];
            }
            for (const curSpecial of filterSpecial) {
                const specialPrice = curSpecial[length];
                const nextNeeds = [];

                for (let i = 0; i < length; i++) {
                    if (curSpecial[i] > curNeeds[i]) {
                        break;
                    }
                    nextNeeds.push(curNeeds[i] - curSpecial[i]);
                }
                if (nextNeeds.length === length) {
                    minPrice = Math.min(minPrice, dfs(nextNeeds) + specialPrice);
                }
            }
            memo.set(curNeeds, minPrice);
        }

        return memo.get(curNeeds);
    };

    special.forEach(sp => {
        let totalCount = 0;
        let totalPrice = 0;

        for (let i = 0; i < length; i++) {
            totalCount += sp[i];
            totalPrice += sp[i] * price[i];
        }
        if (totalCount > 0 && totalPrice > sp[length]) {
            filterSpecial.push(sp);
        }
    });

    return dfs(needs);
};
