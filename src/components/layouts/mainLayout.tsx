import NavBar from "./Navbar";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
