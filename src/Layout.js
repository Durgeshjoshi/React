
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
        <Outlet></Outlet>
        <Rightbar></Rightbar>
      </div>
    </div> 
    </>
  };

  export default Layout;