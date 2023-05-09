import React, { useState, useEffect, useRef } from 'react';

function Panel({ label, content, activeTab, index, activateTab }) {
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
      <button className="panel__label" role="tab" onClick={activateTab}>
        {label}
      </button>
      <div
        className="panel__inner"
        style={innerStyle}
        aria-hidden={!isActive}
        ref={innerRef}
      >
        <p className="panel__content">{content}</p>
      </div>
    </div>
  );
}

function Accordion({ panels }) {
  const [activeTab, setActiveTab] = useState(0);

  function activateTab(index) {
    setActiveTab((prevActiveTab) =>
      prevActiveTab === index ? -1 : index
    );
  }

  return (
    <div className="accordion" role="tablist">
      {panels.map((panel, index) => (
        <Panel
          key={index}
          activeTab={activeTab}
          index={index}
          {...panel}
          activateTab={() => activateTab(index)}
        />
      ))}
    </div>
  );
}

const panels = [
  {
    label: "Seriously, Don't Use Icon Fonts",
    content:
      'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
  },
  {
    label: "Screen Readers Actually Read That Stuff",
    content:
      'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
  },
  {
    label: "They Fail Poorly and Often",
    content:
      'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
  },
  {
    label: "They're a Nightmare if You're Dyslexic",
    content:
      'Many dyslexic people find it helpful to swap out a website\'s typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.',
  },
  {
    label: "There's Already a Better Way",
    content:
      "SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.",
  },
];

function App() {
  return <Accordion panels={panels} />;
}

export default App
