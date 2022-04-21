import React from 'react'
import Avatar from "../assets/Type3.png"
import Type from "../assets/T1ype.png"
import Type2 from "../assets/Type1.png"
import color from "../assets/overlay color.png"
import color1 from "../assets/overlay color2.png"




const EndCard1 = () => {
  return (
    <div>
          <div className="card" style={{width: "470px",display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"2rem" ,height:"150px",margin:"10px",padding:"20px",boxSizing:"border-box",backgroundColor:"#005249",borderRadius:"10px",color:"white"}}>
      <img src={Type} class="card-img-top"style={{width: "4rem",height: "4rem",marginRight:"5rem"}} alt="..."></img>
     <div className="card-body">
        <h2>38,566</h2>
          <p className="card-text">
       Conversion
          </p>
        
      </div>
      <img src={color} class="card-img-top"style={{width: "4rem",height: "4rem"}} alt="..."></img>
     
    </div>
      <div className="card" style={{width: "470px",display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"2rem" ,height:"150px",margin:"10px",padding:"20px",boxSizing:"border-box",backgroundColor:"#7A4F01",borderRadius:"10px",color:"white"}}>
      <img src={Type2} class="card-img-top"style={{width: "4rem",height: "4rem",marginRight:"5rem"}} alt="..."></img>
     <div className="card-body">
     <h2>38,566</h2>
          <p className="card-text">
       Conversion
          </p>
      </div>
      <img src={color1} class="card-img-top"style={{width: "4rem",height: "4rem"}} alt="..."></img>
     
    </div></div>
  )
}

export default EndCard1