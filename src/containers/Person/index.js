import React, { Component } from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {createPerson} from "../../redux/actions/person"

 class Person extends Component {
    addPerson=()=>{
        const name=this.name.value;
        const age=this.age.value;
        let obj={id:nanoid(),name,age}
        this.props.jiayiren(obj)
    }
  render() {
    return (

    <div>
      <h2>{this.props.he}</h2>
        <input ref={a=>this.name=a}/>
        <input ref={a=>this.age=a}/>
        <button onClick={this.addPerson}>tianjia</button>
        <ul>
          {this.props.pers.map(p=>{
            return <li key={p.id}>{p.name}---{p.age}</li>
          })}
        </ul>
    </div>
    )
  }
}

export default connect(
  state=>({pers:state.person,he:state.count}),
  {jiayiren:createPerson}
)(Person)
