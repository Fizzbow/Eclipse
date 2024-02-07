import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="full flex flex-col">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
