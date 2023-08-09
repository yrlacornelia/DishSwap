import NavBar from "./Navbar";
import React from "react";
import Example from "./Navbar";
const Layout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center w-full"> 
      {children}
      </div>
  
    </>
  );
};

export default Layout;

