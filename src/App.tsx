import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bilgi from "./pages/Bilgi";
import Katil from "./pages/Katil";
import Hakkimizda from "./pages/Hakkimizda";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bilgi" element={<Bilgi />} />
          <Route path="/katil" element={<Katil />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          {/* Diğer sayfalar buraya eklenecek */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
