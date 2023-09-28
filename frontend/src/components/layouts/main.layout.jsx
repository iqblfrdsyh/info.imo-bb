import React from "react";
import NavigationBar from "./header/header";
import Footer from "./footer/footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main className="pt-[120px] mb-[100px]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
