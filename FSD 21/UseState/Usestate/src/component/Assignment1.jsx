import React ,{ useState}from 'react'

const Assignment1 = () => {
    const [height, setHeight] = useState(200);
    const [width, setWidth] = useState(300);
    function incRow(){
        setWidth(width+1);
    }
    function decRow(){
        setWidth(width-1);
    }
    function incCol(){
        setHeight(height+1);
    }
    function decCol(){
        setHeight(height-1);
    }
  return (
    <div style={{border: '2px black', height:'600px', width:'600px'}}>
        <h1>Cat</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4IpkPcrV90LfRSfdq067tkfs_7wtY9S7u4wVA7m-iw&s=10" alt="Cat" height={height} width={width} />
      <button onClick={incRow}>Row +</button> 
       <span>{width}</span>
       <button onClick={decRow}>Row -</button> <br />
       <button onClick={incCol}>Column +</button>
       <span>{height}</span>
       <button onClick={decCol}>Column -</button>
    </div>
  )
}

export default Assignment1
