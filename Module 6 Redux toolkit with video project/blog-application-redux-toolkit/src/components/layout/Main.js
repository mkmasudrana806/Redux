import React from "react";
import LeftNavbar from "../navbar/LeftNavbar";
import Blogs from "../blogs/Blogs";

const Main = () => {
  return (
    <section className="wrapper">
      <LeftNavbar />
      <Blogs />
    </section>
  );
};

export default Main;
