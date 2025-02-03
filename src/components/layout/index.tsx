import { Outlet, useLocation } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { useEffect } from "react";


const Layout = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // default holatda storagega tilni qo'shish
  useEffect(() => {
    localStorage.setItem("i18nextLng", "en");
  }, []);

  return (
    <>
      <Header />
      <main className="mt-[75px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
