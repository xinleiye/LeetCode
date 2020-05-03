/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let res;
    let startCity = new Set();
    let endCity = new Set();
    
    paths.forEach((cityPath) => {
        if (endCity.has(cityPath[0])) {
            endCity.delete(cityPath[0]);
        } else {
            startCity.add(cityPath[0]);
        }
        if (startCity.has(cityPath[1])) {
            startCity.delete(cityPath[1]);
        } else {
            endCity.add(cityPath[1]);
        }
    });

    endCity.forEach(val => {
        res = val;
    });
        
    return res;
};
