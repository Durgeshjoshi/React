import React from "react";
import ReactDom from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <RouterProvider router={router} />
        {/*<Header />
        <Body />
        <Footer /> */}
      </div>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("rot"));

root.render(<AuthContextProvider><AppLayout></AppLayout></AuthContextProvider>);
