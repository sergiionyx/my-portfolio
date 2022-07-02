import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";


function App() {
  return (
    <div>
      <Router>
        
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
          <Footer/>

      </Router>
    </div>
  );
}

export default App;
