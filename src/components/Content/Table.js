import React from 'react'

const Table = () => {
  return (<>
    <div class="card" style={{width:"1000px",marginLeft:"10px"}}>
    <div class="card-body">
        <h4>Invoice</h4>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Invoice ID</th>
        <th scope="col">Category</th>
        <th scope="col">Price</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody> 
      <tr>
        <th scope="row">INV-e9804378</th>
        <td>Android</td>
        <td>$64.08</td>
        <td>In progress</td>
      </tr>
      <tr>
        <th scope="row">INV-e9804378</th>
        <td>Windows</td>
        <td>$61.82</td>
        <td>Paid</td>
      </tr>
      <tr>
        <th scope="row">INV-e9804378</th>
        <td>Mac</td>
        <td>$82.27</td>
        <td>Out of date</td>
      </tr>
      <tr>
        <th scope="row">INV-e9804378</th>
        <td>Windows</td>
        <td>$90.68</td>
        <td>Paid</td>
      </tr>
      <tr>
        <th scope="row">INV-e9804378</th>
        <td>Windows</td>
        <td>$70.87</td>
        <td>In progress</td>
      </tr>
    </tbody>
  </table><div style={{textAlign:"right"}}>
 <p >View All &#62;</p> </div>
    </div>
  </div>
    
  </>
  )
}

export default Table