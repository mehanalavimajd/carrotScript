import { type,str } from "../../browser";
function Qselector(variable) {
    if (type (variable) == str) {
        return document.querySelector(variable)
    }
}
