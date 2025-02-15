import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import InsidePage from "./pages/InsidePage";
import InsidePage2 from "./pages/InsidePage2";
import InsidePage3 from "./pages/InsidePage3";
import InsidePage4 from "./pages/InsidePage4";
import InsidePage5 from "./pages/InsidePage5";
import InsidePage6 from "./pages/InsidePage6";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/inside" element={<InsidePage/>}/>
        <Route path="/inside2" element={<InsidePage2/>}/>
        <Route path="/inside3" element={<InsidePage3/>}/>
        <Route path="/inside4" element={<InsidePage4/>}/>
        <Route path="/inside5" element={<InsidePage5/>}/>
        <Route path="/inside6" element={<InsidePage6/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
