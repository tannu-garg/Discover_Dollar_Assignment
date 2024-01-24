// ExpandableDropdown.js
import React, { useState } from 'react';

const ExpandableDropdown = ({ category }) => {
  const [expanded, setExpanded] = useState(false);

  const handleHover = () => {
    setExpanded(true);
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="expandable-dropdown" onMouseEnter={handleHover} onClick={handleClick}>
      <span>{category.name}</span>
      {expanded && category.subcategories && (
        <div className="subcategories">
          {category.subcategories.map((subcategory) => (
            <ExpandableDropdown key={subcategory.name} category={subcategory} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpandableDropdown;
