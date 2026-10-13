import React, { useEffect, useState } from 'react'

const App = () => {
  const [formData, setformData]=useState({
  name: "",
  email: "",
  password: ""
  })

  useEffect (() => {
    console.log("form data update", formData);
  },[formData])

  const handleChange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]:e.target.value,
    })
  }
  const hadleSubmit =(e)=>{
    e.preventDefault();
    alert("registration successfull");
    console.log(formData);
  }
  return (
    <div>
      <form action="">
        <input type="text" name="name" placeholder='enter value' value={formData.name} onChange={hadleSubmit} />
        <br />
        <input type="email" name="email" placeholder='enter email' value={formData.email} onChange={hadleSubmit} />
        <br />
        <input type="password" name='password' placeholder='enter password' value={formData.password} onChange={hadleSubmit} />
        <br />
        <button type='submit'>Registration</button>
      </form>
    </div>
  )
}

export default App