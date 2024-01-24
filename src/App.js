// App.js
import React from 'react';
import Category from './Category';
import Header from './Header';
import ProductList from './ProductList';
import SaleOffer from './SaleOffer';
import  categoriesData  from './categoriesData';
import featuredProducts from './featuredProducts';
import Footer from './Footer';
import FooterI from './FooterI';
import SocialMediaLink from './SocialMediaLink';



const App = () => {
  // Filter out "Fashion" and "Electronics" categories
  const filteredCategories = categoriesData.filter(
    (category) => category.name !== 'Fashion' && category.name !== 'Electronics'
  );

  return (
    <div className="app">
      <Header categoriesData={categoriesData} />

      <div className="categories">
        {filteredCategories.map((category) => (
          <Category key={category.name} category={category} />
        ))}
      </div>
      <SaleOffer />
      <ProductList products={featuredProducts} />
      <Footer/>
      <FooterI/>
      <SocialMediaLink/>
    </div>
  );
};

export default App;


// import React  from 'react';
// import Category from './Category';
// import Header from './Header';
// import ProductList from './ProductList';
// import SaleOffer from './SaleOffer';
// import { categoriesData, featuredProducts } from './categoriesData/featuredProducts';

// // const categoriesData = [
// //   {
// //     name: "Fashion",
// //     subcategories: [
// //       { name: "Men", subcategories: [{ name: "Casual" }, { name: "Formal" }, { name: "Ethnic Wear" }] },
// //       { name: "Women", subcategories: [{ name: "Casual" }, { name: "Formal" }] },
// //     ],
// //   },
// //   {
// //     name: "Electronics",
// //     subcategories: [
// //       { name: "Laptops", subcategories: [{ name: "Gaming" }, { name: "Business" }] },
// //       { name: "Smartphones", subcategories: [{ name: "Android" }, { name: "iOS" }] },
// //     ],
// //   },
// //   // ... other categories ...
// // ];
// // const featuredProducts = [
// //   // Sample product data
// //   {
// //     id: 1,
// //     name: 'T-Shirt',
// //     description: 'Black color printed',
// //     price: 19.99,
// //     image: 'https://www.shutterstock.com/image-vector/quote-typography-t-shirt-design-260nw-1486514147.jpg',
// //   },
// //   {
// //     id: 2,
// //     name: 'Laptop',
// //     description: 'Dell',
// //     price: 40.0000,
// //     image: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2hpcHBvdW5pY29ybjc2X3dhdGVyY29sb3JfaWxsdXN0cmF0aW9uX29mX2xhcHRvcF9pc29sYXRlX2lsbHVzdF85ODc5ZmYwOS1iMjM5LTQ2ZDItYWM2Yi1iYzcwMjI3MGJmZTQucG5n.png',
// //   },
// //   {
// //     id: 3,
// //     name: 'Shoes',
// //     description: 'Color-Black',
// //     price: 19.99,
// //     image: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/11/product_photography_tips_4.jpg?resize=1500%2C1001&ssl=1',
// //   },
// //   {
// //     id: 4,
// //     name: 'T-Shirt',
// //     description: 'White colored',
// //     price: 29.99,
// //     image: 'https://www.mydesignation.com/wp-content/uploads/2019/06/trivandrum-tshirt-mydesignation-image-latest.jpg',
// //   },
// //   {
// //     id: 5,
// //     name: 'T-Shirt',
// //     description: 'Black color printed',
// //     price: 19.99,
// //     image: 'https://www.shutterstock.com/image-vector/quote-typography-t-shirt-design-260nw-1486514147.jpg',
// //   },
// //   {
// //     id: 6,
// //     name: 'T-Shirt',
// //     description: 'White colored',
// //     price: 29.99,
// //     image: 'https://www.mydesignation.com/wp-content/uploads/2019/06/trivandrum-tshirt-mydesignation-image-latest.jpg',
// //   },
// //   {
// //     id: 7,
// //     name: 'Shoes',
// //     description: 'Color-Black',
// //     price: 19.99,
// //     image: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/11/product_photography_tips_4.jpg?resize=1500%2C1001&ssl=1',
// //   },
// // {    id: 8,
// //     name: 'Shoes',
// //     description: 'Color-Black',
// //     price: 19.99,
// //     image: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/11/product_photography_tips_4.jpg?resize=1500%2C1001&ssl=1',
// //   },
 
// //   // Add more products as needed
// // ];


// const App = () => {
//   // Filter out "Fashion" and "Electronics" categories
//   const filteredCategories = categoriesData.filter((category) => category.name !== 'Fashion' && category.name !== 'Electronics');

//   return (
//     <div className="app">
//       <Header categoriesData={categoriesData} />

//       <div className="categories">
//         {filteredCategories.map((category) => (
//           <Category key={category.name} category={category} />
//         ))}
//       </div>
//           <SaleOffer/>
//       <ProductList products={featuredProducts} />
//     </div>
//   );
// };

// export default App;