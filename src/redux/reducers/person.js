import { ADDPERSON } from "../constant";
const initPerson=[]
export default function person (preState=initPerson,action){
    console.log("person")
    const {type,data}=action;
    switch (type){
        case ADDPERSON:
            //此处不可以这样写perState.unshift(data),因为此处只是作了浅比较，person是纯函数
            return [data,...preState];
        default:
            return preState
        
    }
}