import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import SideBySideView from "./pages/sideBySideView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Comparison" element={<SideBySideView />} />
      </Routes>
    </Router>
  );
}

export default App;