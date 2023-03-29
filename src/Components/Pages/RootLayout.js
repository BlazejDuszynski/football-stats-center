import { Outlet } from "react-router-dom";
import Navbar from "../General/Navbar";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default RootLayout;
