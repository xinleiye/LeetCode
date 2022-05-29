/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    const validIPv4 = (ip) => {
        const ips = ip.split(".");

        if (ips.length !== 4) {
            return false;
        }
        for (const n of ips) {
            if (isNaN(n) || n.length > 3 || n.length === 0) {
                return false;
            }
            const number = parseInt(n);
            if (number < 0 || number > 255 || String(number).length !== n.length) {
                return false;
            }
        }

        return true;
    };
    const validIPv6 = (ip) => {
        const ips = ip.split(":");

        if (ips.length !== 8) {
            return false;
        }
        for (const n of ips) {
            console.log(n.length, parseInt(n, 16))
            if (n.length > 4 || n.length === 0) {
                return false;
            }
            for (const c of n) {
                const number = parseInt(c, 16);
                if (isNaN(number)) {
                    return false;
                }
            }
        }

        return true;
    };

    if (queryIP.indexOf(".") > 0) {
        return validIPv4(queryIP) ? "IPv4" : "Neither";
    } else {
        return validIPv6(queryIP) ? "IPv6" : "Neither";
    }
};
