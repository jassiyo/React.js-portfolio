// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Expirence from "./components/Expirence/Expirence";
import Contact from "./components/Contact/Contact";
import Service from "./components/Services/Service";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import './App.css'
function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Navbar />
      <About />
      <Expirence />
      <Service />
      <Portfolio />
      < Testimonial />
      <Contact />
      <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/navbar" component={Navbar} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
