import React from "react";
import Header from "../components/header/header";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
        <Header />
        <Nav />
        <div className="outlet">
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Root