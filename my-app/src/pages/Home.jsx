import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // Hooks
  const navigate = useNavigate();

  // Functions
  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div className="home">
      <h1>Are You hungry?</h1>
      <p>Don't wait to have a good meal</p>
      <button onClick={handleClick}>Order Now</button>
    </div>
  );
};

export default Home;
