import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Video from "./Video"; // Adjust the import path as necessary

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Video />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
