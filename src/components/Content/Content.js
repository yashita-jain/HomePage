import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Table from "./Table";
import Table2 from "./Table2";
import Table3 from "./Table3";
import Table4 from "./Table4";
import EndCard1 from "./EndCard1";
import Icon from "../assets/Icon Base.png";
import not from "../assets/not.png";
import ppl from "../assets/ppl.png";
import avatar from "../assets/Avatar.png";
import us from "../assets/ic_flag_en.png";






const Content = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"space-between",boxSizing:"border-box"}}>
        <div>
          <img src={Icon}></img>
        </div>
        <div>
          <img src={us} style={{margin:"10px"}}></img>
          <img src={not} style={{margin:"10px"}}></img>
          <img src={ppl} style={{margin:"10px"}}></img>
          <img src={avatar} style={{margin:"10px"}}></img>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "2rem",
          marginLeft: "5rem",
          justifyContent: "space-around",
          margin: "10px",
        }}
      >
        <Card />
        <Card2 />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card3 />
        <Card4 />
        <Card5 />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Table />
        <Table2 />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
      <Chart1/>
      <Chart2/>

      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
        
        <Table3 />
        <Table4 />
        <EndCard1 />
      </div>
    </>
  );
};

export default Content;
