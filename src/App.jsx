import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import InsideComponent from "./components/InsideComponent";
import InsideComponent2 from "./components/InsideComponent2";
import InsideComponent3 from "./components/InsideComponent3";
import InsideComponent4 from "./components/InsideComponent4";
import InsideComponent5 from "./components/InsideComponent5";
import InsideComponent6 from "./components/InsideComponent6";
function App() {
  return (
    
    <Router>
      
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/inside" element={<InsideComponent/>}/>
        <Route path="/inside2" element={<InsideComponent2/>}/>
        <Route path="/inside3" element={<InsideComponent3/>}/>
        <Route path="/inside4" element={<InsideComponent4/>}/>
        <Route path="/inside5" element={<InsideComponent5/>}/>
        <Route path="/inside6" element={<InsideComponent6/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
