import React from "react";
import NavigationBar from "./header/header";
import Footer from "./footer/footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
