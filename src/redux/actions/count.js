import {Increment,Decrement} from "../constant"

export const increment=(data)=>({type:Increment,data})
export const decrement=(data)=>({type:Decrement,data})
export const incrementAsync=(data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(increment(data))
        },time)
    }
}