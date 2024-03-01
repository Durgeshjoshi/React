import { useEffect, useState } from "react";
import { LOGO_URL } from "../utilis/constants";

const Header = () => {
  const [login, setLogin] = useState("Login");

  useEffect(() => {
    console.log('use effect called');
  })
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" width="50" height="50" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Logasfdsafdin");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
