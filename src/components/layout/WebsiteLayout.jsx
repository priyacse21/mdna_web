import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function WebsiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink font-sans">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}