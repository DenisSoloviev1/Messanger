import "./UserHeader.scss";
import Avatar from "./Avatar/Avatar.jsx";
import React from "react";

export default function UserHeader({name, nickname}) {
  return (
    <section id="UserHeader">
      <Avatar photo={"/images/no-avatar.png"}/>
      <div className="bio">
        <h1>{name}</h1>
        <p>{nickname}</p>
      </div>
    </section>
  );
}
