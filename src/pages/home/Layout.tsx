import Home from "./Home";
import Header from "@/components/Header";

const Layout = () => {
  return (
    <main className="full flex flex-col">
      <Header connected={false} />
      <Home />
    </main>
  );
};
export default Layout;
