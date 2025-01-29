import { Outlet, useLocation } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { useEffect } from "react";


const Layout = () => {
  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
