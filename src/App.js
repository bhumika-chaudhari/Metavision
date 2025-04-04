import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./components/ThemeContext"; // Import ThemeProvider & ThemeContext
import Herosection from "./components/Herosection";
import Featuresection from "./components/Featuresection";
import Price from "./components/Price";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AppContent = () => {
  const { theme } = useContext(ThemeContext); // Consume ThemeContext

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/feature" element={<Featuresection />} />
        <Route path="/price" element={<Price />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider> 
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
