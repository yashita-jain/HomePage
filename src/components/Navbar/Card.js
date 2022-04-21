import React from "react";
import Avatar from "../assets/Avatar.png"

const Card = () => {
  return (
    <div className="card" style={{width: "400px",display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"2rem"}}>
      <img src={Avatar} class="card-img-top"style={{width: "4rem",height: "4rem"}} alt="..."></img>
      <div className="card-body">
        <p className="card-text">
        Carlota Monteiro
          </p>
          <p className="card-text">
       Admin
          </p>
      </div>
    </div>
  );
};

export default Card;
