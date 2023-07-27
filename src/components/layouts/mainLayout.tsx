import NavBar from "./Navbar";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      <div className="flex  justify-center"> 
      {children}
      </div>
  
    </div>
  );
};

export default Layout;

