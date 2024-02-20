import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/Sidebar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
