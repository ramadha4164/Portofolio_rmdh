import Navbar from "./components/Navbar";
import MarqueeBanner from "./components/MarqueeBanner";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div>
      <Navbar />

      <Home />

      <MarqueeBanner />

      <About />

      <Work />

      <Contact />

      <Footer />
    </div>
  );
}
