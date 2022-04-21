import React from 'react'
import image from "../assets/FeaturedApp.png"
const Card2 = () => {
  return (
    <div className="card bg-dark text-white" style={{width:"500px",height:"372px", overflow:"hidden",borderRadius:"15px",marginLeft:"10px"}}>
    <img src={image} className="card-img" alt="..."></img>
    <div className="card-img-overlay" style={{display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
      <h6 className="card-title">FEATURED APP</h6>
      <h2>Strike a yogi pose</h2>
      <p>Get fit with pocket Yoga's <br></br>customisable routines.</p>
      
    </div>
  </div>
  )
}

export default Card2;