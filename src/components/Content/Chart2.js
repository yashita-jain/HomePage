import React from "react";
import chrt from "../assets/COMPONENT.png";


const Chart2 = () => {
  return (
    <div className="card" style={{padding:"30px",margin:"10px",boxSizing:"border-box",marginLeft:"100px",height:"545px"}}>
        <h5>Total Installed</h5>
        <p>(+43%)than last year</p>
      <img className="card-img-top" src={chrt} alt="Card image cap" style={{width:"800px"}}></img>
      <div className="card-body">
       
      </div>
    </div>
  );
};

export default Chart2;
