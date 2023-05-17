
function stringReverse(str) {
    let res = '';
    for (let i=str.length-1; i>=0; i--) {
        res += str.at(i)
    };
    return res;
};

module.exports = stringReverse;