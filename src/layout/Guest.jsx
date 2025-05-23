import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";
import Footer from "../components/Footer";

const GuestLayout = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <TheNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GuestLayout;
