import React from "react";
import { NavLink } from "react-router-dom";

export default function Form({ title, text, to, linkText }) {
  return (
    <section >
      <h3>{title}</h3>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button>ДАЛЕЕ</button>
      <p>
        {text} <NavLink to={to}>{linkText}</NavLink>
      </p>
    </section>
  );
}
