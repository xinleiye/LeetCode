/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
    const maskEmail = (s) => {
        const [name, domain] = s.split("@").map(item => item.toLowerCase());

        return `${name[0]}*****${name[name.length - 1]}@${domain}`;
    };
    const maskPhone = (s) => {
        const numCh = [];
        for (const ch of s) {
            if (ch >= "0" && ch <= "9") {
                numCh.push(ch);
            }
        }

        const length = numCh.length;
        const last4 = numCh.slice(length - 4).join("");
        if (length === 10) {
            return `***-***-${last4}`;
        } else if (length === 11) {
            return `+*-***-***-${last4}`;
        } else if (length === 12) {
            return `+**-***-***-${last4}`;
        } else if (length === 13) {
            return `+***-***-***-${last4}`;
        }
    };

    if (s.indexOf("@") >= 0) {
        return maskEmail(s);
    } else {
        return maskPhone(s);
    }
};
