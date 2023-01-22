import React from "react";
import s from "./total.module.css"

export default function Total(props) {
  let total = props.parts.reduce((sum, part) => sum + part.tasks, 0);
  return (
    <div className={s.total}>
      <h5>Total tasks:</h5>
      <p>{total}</p>
    </div>
  );
}
