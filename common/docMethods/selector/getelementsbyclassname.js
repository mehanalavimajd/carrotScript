import { type,str } from "../../browser";
function GSclass(variable){
    if (type (variable) == str) {
        return document.getElementById(variable)
    }
}
