import React from "react";
import Part from "../Part/Part";

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => {
        return (
          <Part key={part.id} part={part.part} tasks={part.tasks} />
        );
      })}
    </div>
  );
};

export default Content;
