import React from "react";
import l from "../assets/#.png"
import l1 from "../assets/#1.png"
import l2 from "../assets/#2.png"
import l3 from "../assets/#3.png"
import l4 from "../assets/#4.png"
import dropbox from "../assets/dropbox-color.png"
import github from "../assets/ic_github.png"
import drive from "../assets/ic_drive.png"
import evernote from "../assets/ic_evernote.png"
import chrome from "../assets/dropbox-color.png"








const Table = () => {
  return (
    <div class="card" style={{width:"400px" ,margin:"10px"}}>
      <div class="card-body">
        
        <table class="table">
          <h5>Top Related Applications</h5>
          <tbody>
            <tr>
              <th scope="row"> 
               <img src={chrome}style={{marginRight:"10px"}} alt="..."></img>
               Chrome</th>
              
              <td><img src={l}style={{marginRight:"10px"}} alt="..."></img></td>
            </tr>
            <tr>
              <th scope="row"> <img src={drive}style={{marginRight:"10px"}} alt="..."></img>Drive</th>
             
              <td><img src={l1}style={{marginRight:"10px"}} alt="..."></img></td>
            </tr>
            <tr>
              <th scope="row"> <img src={dropbox}style={{marginRight:"10px"}} alt="..."></img>Dropbox</th>
             
              <td><img src={l2}style={{marginRight:"10px"}} alt="..."></img></td>
            </tr>
            <tr>
              <th scope="row"> <img src={evernote}style={{marginRight:"10px"}} alt="..."></img>EverNote</th>
             
              <td><img src={l3}style={{marginRight:"10px"}} alt="..."></img></td>
            </tr>
            <tr>
              <th scope="row"> <img src={github}style={{marginRight:"10px"}} alt="..."></img>Github</th>
             
              <td><img src={l4}style={{marginRight:"10px"}} alt="..."></img></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
