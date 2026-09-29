import { Outlet } from "react-router-dom";

import "./layout.css";
import Header from "./Header";
import Footer from "./Footer";

export default function WebsiteLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}