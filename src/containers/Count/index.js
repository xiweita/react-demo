
import {increment,decrement,incrementAsync} from "../../redux/actions/count"
import React, { Component } from 'react';
import {connect} from "react-redux";

// const mapStateToProps=(state)=>{
//     return {count:state}
// }
// const mapDispatchToProps=(dispatch)=>{
//     return {
//         jia:num=>dispatch(createIncrement(num)),
//         jian:num=>dispatch(createDecrement(num)),
//         jiaAsync:(num,time)=>dispatch(createAsyncIncrement(num,time)),
//     }
// }



 class Count extends Component {
    
    increment=()=>{
        const {value}=this.selectNum;
        this.props.increment(value*1)
    }
    decrement=()=>{
        const {value}=this.selectNum;
        this.props.decrement(value*1)
    }
    incrementIfOdd=()=>{
        const {value}=this.selectNum;
        
        if(this.props.count%2!==0){

           this.props.increment(value*1)
        }
    }
    asyncIncrement=()=>{
        const {value}=this.selectNum;
        this.props.incrementAsync(value*1,500)
        
    }
  render() {
    return (
        <div>
            <h1>当前求和为：{this.props.count}----{this.props.renshu}</h1>
            <select ref={c=>this.selectNum=c}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
            <button onClick={this.asyncIncrement}>asyncIncrement</button>

            
        </div>
    )
  }
}

// function Count (){
//     const [count,setCount]=React.useState(0)
//     React.useEffect(()=>{
//         let timer=setInterval(()=>{
//             setCount(count=>count+1)
//         },1000)
//         return ()=>{
//             clearInterval(timer)
//         }
//     },[])
//     const add=()=>{
//         // setCount(count+1)
//         setCount(count=>count+1)
//     }
//     return (
//         <div>
//             <hr/>
//             <p>{count}</p>
//             <button onClick={add}>加一</button>
//         </div>
//     )
// }



export default connect(
    state=>({count:state.count,renshu:state.person.length}),
    {
        increment,
        decrement,
        incrementAsync
    }
    )(Count)