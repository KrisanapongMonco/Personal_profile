import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">{/* Main content goes here */}</div>
      <Footer />
    </div>
  );
};

export default Layout;
