import About from "./components/About";
import Available from "./components/Available";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Contact from "./components/Contact";

export default function Home(){
    return (
        <div>
          <Header />
          <Hero />
          <Features />
          <Available />
          <About />
          <Cta />
          <Faq />
          <Team />
          <Contact />
          <Footer />
        </div>
    );
}