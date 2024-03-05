
import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";

import { Outlet } from "react-router-dom";

const Layout = () => {
    return <>
    <div>
      <Navbar></Navbar>
      <div style={{display:"flex"}}>
        <Leftbar></Leftbar>
        <div style={{flex: "6"}}>
        <Outlet></Outlet>
        </div>
        <Rightbar></Rightbar>
      </div>
    </div> 
    </>
  };

  export default Layout;