import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import "./stylesheets/Home.css";
import "./stylesheets/header-footer.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/courses" element={<Courses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
