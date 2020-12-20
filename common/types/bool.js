import {type} from "../browser";
function bool (variable){
    if (type (variable) === "number") {
        if (variable == 0) {
            return false
        } else if (variable == 1) {
            return true
        }
    } else if (type (variable) === "string") {
        if (variable == "false") {
            return false
        } else if (variable == "true") {
            return true
        }
}
}
