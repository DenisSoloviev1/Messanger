import "./Authorization.scss";
import Form from "../../components/Form.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

export default function Authorization({activeMode,setActiveMode}) {
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
                text={"Нет аккаунта?"}
                to={"/registration"}
                linkText={"Регистрация"}
              />
            }
          />
          <Route
            path="/authorization"
            element={
              <Form
                title={"Войти"}
                text={"Нет аккаунта?"}
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
                text={"Уже с нами?"}
                to={"/authorization"}
                linkText={"Войти"}
              />
            }
          />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}
