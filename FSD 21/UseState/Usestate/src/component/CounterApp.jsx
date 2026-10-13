import React, { useState } from 'react'

const CounterApp = () => {
    const[count,setCount]=useState(0);
    function inc(){
        setCount(count+1);
    }
    function dec(){
        setCount(count-1);
    }
  return (
    <div style={{border: '2px solid red', height: '300px' , width:'300px'}}>
      <h1>CounterApp</h1>
      <button onClick={inc}>ADD +</button>
      <br />
      <span>{count}</span>
      <br />
      <button onClick={dec}>SUB -</button>
    </div>
  ) 
}

export default CounterApp
