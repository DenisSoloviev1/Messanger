import React, { useEffect, useState } from 'react';
import "./components/DartMode.scss";
import Authorization from "./pages/Authorization/Authorization.jsx";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const [activeMode, setActiveMode] = useState();

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh * 100}px`);
    };

    setVh();

    window.addEventListener('resize', setVh);
    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Authorization setActiveMode={setActiveMode} activeMode={activeMode} className="--dart-mode"/>
      </div>
    </BrowserRouter>
  );
}
