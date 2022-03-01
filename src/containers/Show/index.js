import React from "react";
import {useHistory} from "react-router-dom";
export default function Show (){
    const history=useHistory();
    const goBack=()=>{
        history.goBack()
    }
    const goCount=()=>{
        history.push({pathname:'/Count/1',state:{msg:"XXXX"}})
    }
    const goPerson=()=>{
        history.push({pathname:"Person",state:{msg:"AAAA"}})
    }
    return (
        <div>
            <button onClick={()=>goBack()}>返回</button>
            <button onClick={()=>goCount()}>返回</button>
            <button onClick={()=>goPerson()}>返回</button>
        </div>
    )
}