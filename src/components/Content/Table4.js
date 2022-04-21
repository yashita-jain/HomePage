import React from "react";
import Avatar from "../assets/Avatar10.png"
import Avatar1 from "../assets/Avatar1.png"
import Avatar2 from "../assets/Avatar2.png"
import icon from "../assets/#icon.png"
import icon1 from "../assets/#2icon.png"
import icon2 from "../assets/#3icon.png"





const Table = () => {
  return (
    <div class="card" style={{width:"425px"}}>
      <div class="card-body">
        
        <table class="table">
          <h5>Top Authors</h5>
          <tbody>
            <tr>
              <th scope="row"> 
               <img src={Avatar}style={{marginRight:"10px"}} alt="..."></img>
               Jacqueline Likoki<br></br>13k</th>
              
              <td>
               <img src={icon}style={{marginRight:"10px"}} alt="..."></img>

              </td>
             
              
            </tr>
            <tr>
              <th scope="row"> 
               <img src={Avatar1}style={{marginRight:"10px"}} alt="..."></img>
               Oluchi Mazi<br></br>13k</th>
              
               <td>
               <img src={icon1}style={{marginRight:"10px"}} alt="..."></img>

              </td>
              
            </tr><tr>
              <th scope="row"> 
               <img src={Avatar2}style={{marginRight:"10px"}} alt="..."></img>
               Yi Hanying<br></br>13k</th>
              
               <td>
               <img src={icon2}style={{marginRight:"10px"}} alt="..."></img>

              </td>
              
            </tr></tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
