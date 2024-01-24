// Header.js
import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';


const Header = ({ categoriesData, cartItemsCount }) => {
  return (
    <header className="header">
      <div className="logo">SHOPFLOW</div>
      <nav>
         <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>Contact</li>
          <li>About Us</li>
          <li>
            <div className="category-dropdown">
              <div className="category">Fashion</div>
              <div className="subcategories">
                {categoriesData.find((category) => category.name === 'Fashion')?.subcategories.map((subcategory) => (
                  <div key={subcategory.name} className="subcategory">
                    {subcategory.name}
                    {subcategory.subcategories && (
                      <div className="nested-subcategories">
                        {subcategory.subcategories.map((nestedSubcategory) => (
                          <div key={nestedSubcategory.name} className="nested-subcategory">
                            {nestedSubcategory.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li>
            <div className="category-dropdown">
              <div className="category">Electronics</div>
              <div className="subcategories">
                {categoriesData.find((category) => category.name === 'Electronics')?.subcategories.map((subcategory) => (
                  <div key={subcategory.name} className="subcategory">
                    {subcategory.name}
                  </div>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className="cart-section">
        <div className="cart-icon">🛒</div>
        <div className="cart-count">{cartItemsCount}</div>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
