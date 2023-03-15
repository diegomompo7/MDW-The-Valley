import "./Circle.css";
import React from "react";

const Circle = (props) => {

  // Prevenimos que haya más de un hijo en el componente
  const onlyOneChild = React.Children.only(props.children);

  return (
    <div className="circle">
      { onlyOneChild }
    </div>
  );
}

export default Circle;