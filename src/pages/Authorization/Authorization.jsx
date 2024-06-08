import { Routes, Route } from "react-router-dom";
import "./Authorization.scss";
import Form from "../../widgets/Form/Form.jsx";
import Header from "../../widgets/Header/Header.jsx";
import Footer from "../../widgets/Footer/Footer.jsx";

export default function Authorization() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Form
                title={"Войти"}
                passwordText={"password"}
                question={"Нет аккаунта?"}
                to={"/registration"}
                linkText={"Регистрация"}
              />
            }
          />
          <Route
            path="/registration"
            element={
              <Form
                title={"Регистрация"}
                passwordText={"create password"}
                question={"Уже с нами?"}
                to={"/"}
                linkText={"Войти"}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
