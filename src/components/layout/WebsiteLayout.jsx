import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function WebsiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const headings = document.querySelectorAll("main section h1, main section h2");
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-heading-visible");
          } else {
            entry.target.classList.remove("scroll-heading-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    headings.forEach((heading) => {
      heading.classList.add("scroll-heading");
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
      headings.forEach((heading) => {
        heading.classList.remove("scroll-heading", "scroll-heading-visible");
      });
    };
  }, [pathname]);

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