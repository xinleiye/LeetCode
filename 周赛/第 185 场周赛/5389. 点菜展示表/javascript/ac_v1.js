/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    let res = [];
    let tableInfoMap = new Map();
    let tableIndex;
    let tableIndexSet = new Set();
    let foodItem;
    let foodItemsSet = new Set();

    orders.forEach(aOrder => {
        if (tableInfoMap.has(aOrder[1])) {
            let tableFoodItem = tableInfoMap.get(aOrder[1]);
            
            if (tableFoodItem.has(aOrder[2])) {
                tableFoodItem.set(aOrder[2], tableFoodItem.get(aOrder[2]) + 1);
            } else {
                tableFoodItem.set(aOrder[2], 1);
            }
            if (!foodItemsSet.has(aOrder[2])) {
                foodItemsSet.add(aOrder[2]);
            }
        } else {
            let foodItemMap = new Map();
            
            foodItemMap.set(aOrder[2], 1);
            tableInfoMap.set(aOrder[1], foodItemMap);
            tableIndexSet.add(aOrder[1]);
            if (!foodItemsSet.has(aOrder[2])) {
                foodItemsSet.add(aOrder[2]);
            }
        }
    });

    tableIndex = [...tableIndexSet].sort((val1, val2) => {
        return parseInt(val1, 10) - parseInt(val2, 10);
    });
    foodItem = [...foodItemsSet].sort();

    res[0] = ["Table"].concat(foodItem);
    for (let i = 0, len1 = tableIndex.length; i < len1; i++) {
        let tableInfo = [tableIndex[i]];
        let tableFoodItem = tableInfoMap.get(tableIndex[i]);

        for (let j = 0, len2 = foodItem.length; j < len2; j++) {
            if (tableFoodItem.has(foodItem[j])) {
                tableInfo.push(tableFoodItem.get(foodItem[j]).toString());
            } else {
                tableInfo.push("0");
            }
        }
        res.push(tableInfo);
    }
    
    return res;
};