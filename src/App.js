import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import "./stylesheets/Home.css";
import "./stylesheets/header-footer.css";
import "./stylesheets/Carousel.css";
import "./stylesheets/Projects-courses.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
       
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
