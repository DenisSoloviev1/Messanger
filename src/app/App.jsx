// import Authorization from "../pages/Authorization/Authorization.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Authorization /> */}
      <Profile/>
    </BrowserRouter>
  );
}
