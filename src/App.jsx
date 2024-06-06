import "./components/DartMode.scss";
import Authorization from "./pages/Authorization/Authorization.jsx";
import { BrowserRouter } from "react-router-dom";
import {useState} from 'react'


export default function App() {
  const [activeMode, setActiveMode] = useState();
  return (
    <BrowserRouter>
      <Authorization setActiveMode={setActiveMode} activeMode={activeMode}  className="--dart-mode"/>
    </BrowserRouter>
  );
}
