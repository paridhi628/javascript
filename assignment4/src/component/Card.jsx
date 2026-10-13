import React from 'react'

const Card = () => {
  return (
    <div>
      <div style={{border:"2px solid red", width:"300px", height:"300px", margin:"auto", textAlign:"center"}}>
        <h1>Pizza</h1>
        <p><img src="https://img.magnific.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_hybrid&w=740&q=80" alt="" height={'100px'} width={'100px'}/></p>
        <h2>Price: 300</h2>
      </div>
    </div>
  )
}

export default Card
