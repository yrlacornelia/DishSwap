
import React from "react";
const Layout = ({ children, bgColor }: any) => {
  const defaultBgColor = "bg-green-light";
  return (
    <>
  <div className={`${bgColor || defaultBgColor} min-h-screen`}>
      {children}
      </div>
  
    </>
  );
};

export default Layout;

