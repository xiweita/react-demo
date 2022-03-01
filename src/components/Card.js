import React ,{useRef}from 'react';
import {useDrag} from 'react-dnd';
import * as ItemTypes from './../containers/itemTypes' 

const style={
    background:'#f00',
    margin:5,
    padding:5,
    width:50,
    cursor:'move',
    border:'1px dashed gray'

}

export default function (props) {
  let ref=useRef()
    let [{isDragging},drag]=useDrag({
        type:ItemTypes.ddd,
        item:()=>({...props}),
        collect:(monitor)=>({
          isDragging:monitor.isDragging
        })
    })
    const opacity=isDragging?.1:1;
    drag(ref)
  return (
    <div ref={ref} style={{...style,opacity}}>
        {props.text}
    </div>
  )
}
