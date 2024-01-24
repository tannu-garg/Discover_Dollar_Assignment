// Category.js
import React, { useState } from 'react';
import ExpandableDropdown from './ExpandableDropdown';

const Category = ({ category }) => {
  const [expanded, setExpanded] = useState(false);

  const handleHover = () => {
    setExpanded(true);
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="category" onMouseEnter={handleHover} onClick={handleClick}>
      <h3>{category.name}</h3>
      {expanded && (
        <div className="subcategories">
          {category.subcategories.map((subcategory) => (
            <ExpandableDropdown key={subcategory.name} category={subcategory} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
