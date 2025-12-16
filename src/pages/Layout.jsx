import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
