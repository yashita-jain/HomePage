import React from "react";
import logo from "../assets/logo.png";
import Card from "./Card";
import app from "../assets/app.png";
import Ecommerce from "../assets/E-commerce.png";
import Analytics from "../assets/analytics.png";
import banking from "../assets/banking.png";
import booking from "../assets/booking.png";
import cardImg from "../assets/5.png";


const Navbar = () => {
  return (
    <div>
      <img src={logo}></img>

      <Card />

      <nav className="nav flex-column" style={{ color: "#637381" }}>
        <h6>GENERAL</h6>
        <button
          class="btn btn-outline-success"
          type="button"
          style={{ backgroundColor: "#00AB55 !important" }}
        >
          {" "}
          <a className="nav-link active" style={{ color: "black" }} href="#">
            <img src={app} style={{ marginRight: "1rem" }}></img>
            App
          </a>
        </button>
        <button
          class="btn btn-outline-success"
          type="button"
          style={{ backgroundColor: "#00AB55 !important" }}
        >
          <a className="nav-link active" style={{ color: "black" }} href="#">
            <img src={Ecommerce} style={{ marginRight: "1rem" }}></img>
            E-Commerce
          </a>
        </button>
        <button
          class="btn btn-outline-success"
          type="button"
          style={{ backgroundColor: "#00AB55 !important" }}
        >
          {" "}
          <a className="nav-link active" style={{ color: "black" }} href="#">
            <img src={Analytics} style={{ marginRight: "1rem" }}></img>
            Analytics
          </a>
        </button>
        <button
          class="btn btn-outline-success"
          type="button"
          style={{ backgroundColor: "#00AB55 !important" }}
        >
          {" "}
          <a className="nav-link active" style={{ color: "black" }} href="#">
            <img src={banking} style={{ marginRight: "1rem" }}></img>
            Banking
          </a>
        </button>
        <button
          class="btn btn-outline-success"
          type="button"
          style={{ backgroundColor: "#00AB55 !important" }}
        >
          {" "}
          <a className="nav-link active" style={{ color: "black" }} href="#">
            <img src={booking} style={{ marginRight: "1rem" }}></img>
            Booking
          </a>
        </button>
        <br></br>
        <br></br>
        <h6>MANAGEMENT</h6>
        <div class="btn-group dropend">
          <button type="button" class="btn btn-outline-success">
            <a className="nav-link active" style={{ color: "black" }} href="#">
              <img src={booking} style={{ marginRight: "1rem" }}></img>
              Users
            </a>
          </button>
          <button
            type="button"
            class="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropright</span>
          </button>
          <ul class="dropdown-menu"></ul>
        </div>
        <div class="btn-group dropend">
          <button type="button" class="btn btn-outline-success">
            <a className="nav-link active" style={{ color: "black" }} href="#">
              <img src={booking} style={{ marginRight: "1rem" }}></img>
             Commerce
            </a>
          </button>
          <button
            type="button"
            class="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropright</span>
          </button>
          <ul class="dropdown-menu"></ul>
        </div>
        <div class="btn-group dropend">
          <button type="button" class="btn btn-outline-success">
            <a className="nav-link active" style={{ color: "black" }} href="#">
              <img src={booking} style={{ marginRight: "1rem" }}></img>
              Blog
            </a>
          </button>
          <button
            type="button"
            class="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropright</span>
          </button>
          <ul class="dropdown-menu"></ul>
        </div>
<br></br><br></br>
        <h6>APPS</h6>
        <button class="btn btn-outline-success" type="button" style={{backgroundColor:"#00AB55 !important"}}>  <a className="nav-link active" style={{color:"black"}} href="#">
          <img src={app} style={{marginRight:"1rem"}}></img>
          Mail
        </a></button>
        <button class="btn btn-outline-success" type="button" style={{backgroundColor:"#00AB55 !important"}}><a className="nav-link active" style={{color:"black"}} href="#">
          <img src={Ecommerce} style={{marginRight:"1rem"}}></img>
          Chat
        </a></button>
        <button class="btn btn-outline-success" type="button" style={{backgroundColor:"#00AB55 !important"}}>  <a className="nav-link active" style={{color:"black"}}href="#">
          <img src={Analytics} style={{marginRight:"1rem"}}></img>
          Calendar
        </a></button>
        <button class="btn btn-outline-success" type="button" style={{backgroundColor:"#00AB55 !important"}}>   <a className="nav-link active"style={{color:"black"}} href="#">
          <img src={banking} style={{marginRight:"1rem"}}></img>
      Canban
        </a></button>
      </nav>


      <div class="card  text-center" style={{marginTop:"34rem"}}>
  <img src={cardImg} class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Hi, Carlota Monteiro</h5>
    <p className="card-text">Need help,<br></br> Please check our docs</p>
    <a href="#" class="btn btn-success">Documentation</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;
