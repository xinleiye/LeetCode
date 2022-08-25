/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
    const total = foods.length;
    const cuisineMap = new Map();
    const foodMap = new Map();

    for (let i = 0; i < total; i++) {
        const f = foods[i];
        const c = cuisines[i];
        const r = ratings[i];
        
        if (cuisineMap.has(c)) {
            cuisineMap.get(c).set(f, r);
        } else {
            cuisineMap.set(c, new Map().set(f, r));
        }
        foodMap.set(f, c);
    }
    this.foodMap = foodMap;
    this.cuisineMap = cuisineMap;
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    const cuisineType = this.foodMap.get(food);

    this.cuisineMap.get(cuisineType).set(food, newRating);
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    let foodName = "";
    let maxRate = 0;
    const foodRateMap = this.cuisineMap.get(cuisine);
    
    foodRateMap.forEach((r, n) => {
        if (r > maxRate) {
            foodName = n;
            maxRate = r;
        } else if (r === maxRate && n < foodName) {
            foodName = n;
        }
    });
    
    return foodName;
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
