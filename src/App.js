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
    <div className="main-div">
      <Router>
        
          <Header />
          {/* <div> */}
            <Routes>
              <Route path="/my-portfolio/" element={<About />} />
              <Route path="/my-portfolio/portfolio" element={<Portfolio />} />
              <Route path="/my-portfolio/contact" element={<Contact />} />
              <Route path="/my-portfolio/resume" element={<Resume />} />
            </Routes>
          {/* </div> */}
          <Footer/>

      </Router>
    </div>
  );
}

export default App;
