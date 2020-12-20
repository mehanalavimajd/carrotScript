const browser = window;
const doc = document;
function type(variable) {
    return typeof variable
}
const str = "string"
const num = "number"
const bool = "boolean"
const bigint = "bigint"
const symbol = "symbol"
const func = "function"
const if_types = {
    str = "string",
    num = "number",
    bool = "boolean",
    bigint = "bigint",
    symbol = "symbol",
    func = "function"
}
export {
    browser,
    doc,
    type,
    str,
    num,
    bool,
    bigint,
    symbol,
    func,
    if_types
};
