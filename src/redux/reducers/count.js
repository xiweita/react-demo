import {Increment,Decrement} from "../constant"

const initState=0
export default function countRedecer(preState=initState,action){
    console.log("countRedecer")
    const {type,data}=action;
    switch (type){
        case Increment:
            return preState+data
            case Decrement:
            return preState-data
            default:
                return preState
    }
}