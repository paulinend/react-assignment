import { useState } from 'react';
import Tab from './tab';

const Tabs = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div className="tabs-container">
      <ul className="tab-list">
        <li
          className={`tabs ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1)}
        >
          <Tab />
        </li>
        <li
          className={`tabs ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2)}
        >
          <Tab />
        </li>
        <li
          className={`tabs ${getActiveClass(3, "active-tabs")}`}
          onClick={() => toggleTab(3)}
        >
          <Tab />
        </li>
        <li
          className={`tabs ${getActiveClass(4, "active-tabs")}`}
          onClick={() => toggleTab(4)}
        >
          <Tab />
        </li>
      </ul>
      <div className="tab-content-container">
      {/* missing: how to render the carousel on click */}
      </div>
    </div>
  );
};

export default Tabs
