import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Form.scss";


export default function Form({ title, passwordText, question, to, linkText }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <section>
      <h3>{title}</h3>
      <input type="email" placeholder="email" autoComplete="off" />
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={passwordText}
          id="password"
        />
        <button
          type="button"
          id="togglePassword"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <img src="/images/eye-closed.svg" alt="Hide password" />
          ) : (
            <img src="/images/eye-open.svg" alt="Show password" />
          )}
        </button>
      </div>
      <button>ДАЛЕЕ</button>
      <p>
        {question} <NavLink to={to}>{linkText}</NavLink>
      </p>
    </section>
  );
}
