import React from "react";
import Avatar from "../assets/Type3.png"
import canada from "../assets/ic_flag_en.png"
import france from "../assets/ic_flag_fr.png"
import india from "../assets/ic_flag_de.png"
import korea from "../assets/ic_flags_kr.png"
import us from "../assets/ic_flags_us.png"




const Table = () => {
  return (
    <div class="card" style={{width:"500px",marginRight:"10px"}}>
      <div class="card-body">
        
        <table class="table">
          <h5>Top Installed Countries</h5>
          <tbody>
            <tr>
              <th scope="row"> 
               <img src={canada}style={{marginRight:"5px"}} alt="..."></img>
               Canada</th>
              
              <td>63</td>
               <td>69</td>
              <td>98</td>
              
            </tr>
            <tr>
              <th scope="row"> 
               <img src={france}style={{marginRight:"10px"}} alt="..."></img>
               France</th>
              
              <td>2,3k</td>
              <td>44</td>
              <td>50</td>
              
            </tr><tr>
              <th scope="row"> 
               <img src={india}style={{marginRight:"10px"}} alt="..."></img>
               India</th>
              
              <td>31</td>
              <td>2,1k</td>
              <td>82</td>
              
            </tr><tr>
              <th scope="row"> 
               <img src={korea}style={{marginRight:"10px"}} alt="..."></img>
               Korean</th>
              
              <td>69</td>
              <td>1,8k</td>
              <td>89</td>
              
            </tr><tr>
              <th scope="row"> 
               <img src={us}style={{marginRight:"10px"}} alt="..."></img>
               USA</th>
              
              <td>85</td>
              <td>89</td>
              <td>78</td>
              
            </tr></tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
