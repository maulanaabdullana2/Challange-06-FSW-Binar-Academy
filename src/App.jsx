import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Cars from "./pages/Cars";
import Landingpage from "./pages/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CarProvider } from "../src/store/CartContext";

function App() {
  return (
    <>
      <CarProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/cars" element={<Cars />} />
          </Routes>
          <Footer />
        </Router>
      </CarProvider>
    </>
  );
}

export default App;
