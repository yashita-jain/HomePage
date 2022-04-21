import React from "react";
import chrt from "../assets/chart.png";


const Chart1 = () => {
  return (
    <div className="card" style={{padding:"30px",margin:"10px",boxSizing:"border-box",height:"550px"}}>
        <h5>Current Download</h5><br></br>
      <img className="card-img-top" src={chrt} alt="Card image cap" style={{height:"300px",width:"300px",marginBottom:"70px"}}></img>
      <div className="card-body">
        <p className="card-text">
          Mac  Windows  IOS  Android
        </p>
      </div>
    </div>
  );
};

export default Chart1;
