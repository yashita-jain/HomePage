import React from 'react'
import pic from "../assets/download"

const Card = () => {
  return (
<div className="card" style={{display:"flex",flexDirection:"row",alignItems:"center",borderRadius:"15px",padding:"2rem",width:"915px",backgroundColor:"#C8FACD"}}>
  <div class="card-body">
    <h6>Welcome back</h6>
    <h4>Fabmiana Capmany!</h4>
    <p className="card-text">If you are going to use a passage of Lorem Ipsum,<br></br> you need to be sure there isn't anything</p>
    <button type="button" class="btn btn-success">Go Now</button>
  </div>
  <div>
  <img src={pic} className="card-img-top" alt="..." style={{width: "300px",height: "300px"}}></img></div>
  
</div>
  )
}

export default Card