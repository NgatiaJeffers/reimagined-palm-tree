import React, { useState, useEffect, useRef } from "react";

function Panel({ title, bodyText, activeTab, index, activateTab }) {
  const [height, setHeight] = useState(0);
  const innerRef = useRef(null);

  useEffect(() => {
    const el = innerRef.current;
    const newHeight = el.scrollHeight;
    setHeight(newHeight);
  }, [activeTab]);

  const isActive = activeTab === index;

  const innerStyle = {
    height: isActive ? `${height}px` : 0,
  };

  return (
    <div className="panel" role="tabpanel" aria-expanded={isActive}>
      <button className="panel-label" role="tab" onClick={activateTab}>
        {title}
      </button>
      <div
        className="panel-inner"
        style={innerStyle}
        aria-hidden={!isActive}
        ref={innerRef}
      >
        {bodyText.map((text, index) => (
          <p className="panel-content" key={index}>
            {text.text}
          </p>
        ))}
      </div>
    </div>
  );
}

const Accordion = ({ panels }) => {
  const [activeTab, setActiveTab] = useState(0);

  function activateTab(index) {
    setActiveTab((prevActiveTab) => (prevActiveTab === index ? -1 : index));
  }
  return (
    <div className="accordion" role="tablist">
      {panels.map((panel, index) => {
        return (
          <Panel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={() => activateTab(index)}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
