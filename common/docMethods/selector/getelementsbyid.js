import { type,str } from "../../browser";
function GSid(variable){
    if (type (variable) == str) {
        return document.querySelector(variable)
    }
}
