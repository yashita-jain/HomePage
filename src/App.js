import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar.js";
import Content from "./components/Content/Content.js";

function App() {
  return (
    <div className="Home" style={{display:"flex",flexDirection:"row",marginLeft:"10px"}}>
      <div className="navbar_c" >
        <Navbar />
      </div>
      <div className="content_c" style={{marginLeft:"50px",boxSizing:"border-box"}}> <Content /></div>
    </div>
  );
}

export default App;
