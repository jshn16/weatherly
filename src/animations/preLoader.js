import React, { useEffect } from "react";
import "./preLoader.css";
import { preLoaderAnim } from ".";
import logo from "../logo.png";
import { useNavigate } from "react-router-dom";

function PreLoader() {
  const navigate = useNavigate();
  useEffect(() => {
    preLoaderAnim();
    setTimeout(() => {
      navigate("/home");
    }, 6000);
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <h3>Web Developer</h3>
        <h3>Web Designer</h3>
        <h3>Learner</h3>
      </div>

      <img src={logo} className="app-logo" alt="logo" />
    </div>
  );
}

export default PreLoader;
