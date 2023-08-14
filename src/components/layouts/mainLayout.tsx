import NavBar from "./Navbar";
import React from "react";
import Example from "./Navbar";
const Layout = ({ children }: any) => {
  return (
    <>
      {/* <NavBar /> */}
      <div className=""> 
      {children}
      </div>
  
    </>
  );
};

export default Layout;

