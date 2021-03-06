const jwt = require("jsonwebtoken");
const config = require("../../config/index");

const jwtToken = (data = {}, options = {}, expiresIn = 86400) => {
    return jwt.sign(data, config.SESSION.jwtSecret, { expiresIn, ...options });
}

const pareJwtToken = (token) => {
    try {
        return jwt.verify(token, config.SESSION.jwtSecret);
    } catch {
        return null;
    }
}

const randInt = (start, stop) => {
    return Math.floor(Math.random()*(stop - start + 1) + start);
}

const randFloat = (start, stop, fixed = 2) => {
    return parseFloat((Math.random()*(stop - start + 1) + start).toFixed(fixed));
}

function randString(isToken = false, len = 10) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var n = len;
    if (isToken) {
        n = 40;
        possible = "abcdefghijklmnopqrstuvwxyz0123456789-";
    }
    for (var i = 0; i < n; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const toJsonObject = (data = [], key) => {
    if (key) {
        return data.reduce((cur, next) => ({ ...cur, [next[key]]: next }), {});
    }
    return data;
}  

const exchangeMoney = (type = "ethos-eth", amount) => {
    switch(type) {
        case "ethos-eth": {
            return +amount / 1e6;
        }
        case "eth-ethos": {
            return +amount * 1e6;
        }
        default: return +amount;
    }
}

function formatMoney(num, digital = 2) {
    num = isNaN(+num) ? 0 : +num;
    return num.toFixed(digital).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

module.exports = {
    jwtToken,
    randInt,
    randFloat,
    randString,
    pareJwtToken,
    toJsonObject,
    exchangeMoney,
    formatMoney
}