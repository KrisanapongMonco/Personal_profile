import Career from "../components/Career";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Skills from "../components/Skills";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Showcase />
      <Career />
      <Footer />
    </div>
  );
};

export default Layout;
