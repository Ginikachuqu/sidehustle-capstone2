import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import "./assets/css/index.css";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
