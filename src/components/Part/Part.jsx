import React from "react";
import s from "./part.module.css"

const Part = (props) => {
  return <div className={s.part}>
    <h5>{props.part}</h5>
    <p>{props.tasks}</p>
  </div>;
};

export default Part;
