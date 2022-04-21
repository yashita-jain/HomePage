import React from 'react'
import Avatar from "../assets/Type.png"

const Card3 = () => {
  return (
    <div className="card" style={{width: "465px",display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"2rem",height:"250px",margin:"10px",padding:"80px",boxSizing:"border-box"}}>
    <div className="card-body">
      <p className="card-text">
    Total Active Users
        </p>
        <p className="card-text">
     +2.6%
        </p>
        <h2>18,765</h2>
    </div>
    <img src={Avatar} class="card-img-top"style={{width: "4rem",height: "4rem"}} alt="..."></img>
   
  </div>
  )
}

export default Card3