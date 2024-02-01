import React, { useState } from "react";
import data from "./api.js";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  console.log(selected);
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((dataItem) => (
          <div className="item">
            <div
              onClick={() => handleSingleSelection(dataItem.id)}
              className="title"
            >
              <h3>{dataItem.question}</h3>
              <span>✚</span>
            </div>
            {selected === dataItem.id ? (
              <div className="content">{dataItem.answer}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordion;
