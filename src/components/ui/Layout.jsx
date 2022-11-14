import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
export default function Layout(props) {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <Navbar />
      {props.children}
      <Footer/>
    </div>
  );
}
