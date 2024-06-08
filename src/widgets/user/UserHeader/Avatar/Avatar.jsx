import "./Avatar.scss";
import React from "react";

export default function Avatar({photo}) {
  return (
    <div className="circle">
      <img src={photo} alt="avatar" />
    </div>
  );
}
