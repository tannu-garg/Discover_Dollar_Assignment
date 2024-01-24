// data.js
const categoriesData = [
  {
    name: 'Fashion',
    subcategories: [
      {
        name: 'Men',
        subcategories: [
          {
            name: 'Casual Wear',
            subcategories: [
              {
                name: 'T-Shirt',
              },
              {
                name: 'Shirts',
              },
              
            ],
          },
          {
            name: 'Ethnic Wear',
            subcategories: [
              {
                name: 'Kurtas',
              },
              {
                name: 'Sherwanis',
              },
              
            ],
          },
        ],
      },
      {
        name: 'Women',
        subcategories: [
          {
            name: 'Western Wear',
          },
          {
            name: 'Ethnic Wear',
          },
          // Add more subcategories as needed
        ],
      },
      // Add more subcategories as needed
    ],
  },
  {
    name: 'Electronics',
    subcategories: [
      {
        name: 'Mobiles',
      },
      {
        name: 'Laptops',
      },
      // Add more subcategories as needed
    ],
  },
  // Add more categories as needed
];



export default categoriesData;

  