import CallToAction from "./components/CallToAction.component";
import Footer from "./components/Footer.component";
import Hero from "./components/Hero.component";
import Navbar from "./components/Navbar.component";
import Portfolio from "./components/Portfolio.component";
import Products from "./components/Products.component";
import Testimonial from "./components/Testimonial.component";

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar />
      <Hero />
      <Products />
      <Portfolio />
      <CallToAction />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
