import React, { useState } from "react";

function Tab({ active, onSelect, item }) {
  const classes = "p-3 flex-grow";
  const isActive = active ? " bg-gray-200" : "";

  return (
    <div className={classes + isActive} onClick={onSelect}>
      {item.label}
    </div>
  );
}

function Tabs(props) {
  const { data } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center column">
      <div className="tabs border-gray-800 rounded my-8 shadow-lg rounded  w-3/6">
        <div className="flex border-gray-400 border-b">
          {data.map((item, index) => (
            <Tab
              active={activeIndex === index}
              onSelect={() => setActiveIndex(index)}
              item={item}
              key={index}
            />
          ))}
        </div>
        <div>{data[activeIndex].content}</div>
      </div>
    </div>
  );
}

export default Tabs;
