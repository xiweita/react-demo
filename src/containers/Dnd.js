import React, {useState} from 'react';
import Card from './../components/Card.js'
const style={
    width:300
}

export default function Dnd() {
    const [cards]=useState([
        {id:'card1',text:'card1'},
        {id:'card2',text:'card2'},
        {id:'card3',text:'card1'},
    ])
  return (
    <div style={style}>
        {cards.map((card,index)=>{
            return <Card text={card.text} key={card.id}/>
        })}
        
    </div>
  )
}
