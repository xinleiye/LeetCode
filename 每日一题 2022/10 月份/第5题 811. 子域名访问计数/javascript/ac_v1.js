/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let res = [];
    const visitMap = new Map();
    const add2Map = (map, str, count) => {
        if (map.has(str)) {
            map.set(str, map.get(str) + Number(count));
        } else {
            map.set(str, Number(count));
        }
    };

    for (const c of cpdomains) {
        const [rep, d] = c.split(" ");
        const [d1, d2, d3] = d.split(".");

        if (d3) {
            add2Map(visitMap, d3, rep);
            add2Map(visitMap, `${d2}.${d3}`, rep);
        } else {
            add2Map(visitMap, d2, rep);
        }
        add2Map(visitMap, d, rep);
    }

    visitMap.forEach((rep, d) => {
        res.push(`${rep} ${d}`);
    });

    return res;
};
