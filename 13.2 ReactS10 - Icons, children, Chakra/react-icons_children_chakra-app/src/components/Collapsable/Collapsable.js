import React from "react";
import "./Collapsable.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Collapsable = ({ children, title }) => {

  const [opened, setOpened] = React.useState(false);

  const numHijos = React.Children.count(children);

  return (
    <div className="collapsable">
      <div className="collapsable__title" onClick={() => setOpened(!opened)}>
        {title} ({numHijos})
        {opened ?
          <FaChevronUp className="collapsable__icon"></FaChevronUp> :
          <FaChevronDown className="collapsable__icon"></FaChevronDown>
        }
      </div>
      <div className={opened ? "collapsable__body collapsable__body--opened" : "collapsable__body"}>
        {children}
      </div>
    </div>
  );

}

export default Collapsable;