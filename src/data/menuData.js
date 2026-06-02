const menuData = [
  {
    id: 1,
    category: "Starter",
    name: "Spring Rolls",
    type: "Veg",
    description: "Crispy vegetable spring rolls.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    ingredients: [
      { name: "Cabbage", quantity: "100g" },
      { name: "Carrot", quantity: "50g" },
      { name: "Spring Roll Sheet", quantity: "5 pcs" },
    ],
  },

  {
    id: 2,
    category: "Starter",
    name: "Chicken Wings",
    type: "Non-Veg",
    description: "Spicy grilled chicken wings.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710",
    ingredients: [
      { name: "Chicken Wings", quantity: "250g" },
      { name: "Chili Sauce", quantity: "20ml" },
      { name: "Garlic", quantity: "10g" },
    ],
  },

  {
    id: 3,
    category: "Main Course",
    name: "Paneer Butter Masala",
    type: "Veg",
    description: "Rich paneer curry.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Tomato", quantity: "100g" },
      { name: "Cream", quantity: "50ml" },
    ],
  },

  {
    id: 4,
    category: "Main Course",
    name: "Chicken Biryani",
    type: "Non-Veg",
    description: "Hyderabadi chicken biryani.",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
    ingredients: [
      { name: "Rice", quantity: "250g" },
      { name: "Chicken", quantity: "300g" },
      { name: "Spices", quantity: "20g" },
    ],
  },

  {
    id: 5,
    category: "Dessert",
    name: "Chocolate Cake",
    type: "Veg",
    description: "Soft chocolate cake.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    ingredients: [
      { name: "Chocolate", quantity: "100g" },
      { name: "Flour", quantity: "150g" },
      { name: "Sugar", quantity: "50g" },
    ],
  },

  {
    id: 6,
    category: "Dessert",
    name: "Ice Cream",
    type: "Veg",
    description: "Vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    ingredients: [
      { name: "Milk", quantity: "250ml" },
      { name: "Cream", quantity: "50ml" },
      { name: "Sugar", quantity: "20g" },
    ],
  },

  {
    id: 7,
    category: "Sides",
    name: "French Fries",
    type: "Veg",
    description: "Crispy fries.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    ingredients: [
      { name: "Potato", quantity: "200g" },
      { name: "Salt", quantity: "10g" },
    ],
  },

  {
    id: 8,
    category: "Sides",
    name: "Garlic Bread",
    type: "Veg",
    description: "Toasted garlic bread.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    ingredients: [
      { name: "Bread", quantity: "4 slices" },
      { name: "Garlic", quantity: "15g" },
      { name: "Butter", quantity: "20g" },
    ],
  },

  {
    id: 9,
    category: "Main Course",
    name: "Fish Curry",
    type: "Non-Veg",
    description: "Traditional fish curry.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    ingredients: [
      { name: "Fish", quantity: "250g" },
      { name: "Coconut Milk", quantity: "100ml" },
    ],
  },

  {
    id: 10,
    category: "Starter",
    name: "Veg Cutlet",
    type: "Veg",
    description: "Crispy vegetable cutlet.",
    image: "https://images.unsplash.com/photo-1625943555419-56a2cb596640",
    ingredients: [
      { name: "Potato", quantity: "150g" },
      { name: "Beans", quantity: "50g" },
      { name: "Carrot", quantity: "50g" },
    ],
  },
  {
    id: 11,
    category: "Starter",
    name: "Paneer Tikka",
    type: "Veg",
    description: "Smoky grilled paneer cubes.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Yogurt", quantity: "50g" },
    ],
  },

  {
    id: 12,
    category: "Starter",
    name: "Hara Bhara Kebab",
    type: "Veg",
    description: "Healthy spinach kebabs.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    ingredients: [
      { name: "Spinach", quantity: "100g" },
      { name: "Potato", quantity: "150g" },
    ],
  },

  {
    id: 13,
    category: "Starter",
    name: "Chicken 65",
    type: "Non-Veg",
    description: "South Indian spicy chicken.",
    image: "https://images.unsplash.com/photo-1604908176997-4318ddf7f2c4",
    ingredients: [
      { name: "Chicken", quantity: "250g" },
      { name: "Chili Powder", quantity: "20g" },
    ],
  },

  {
    id: 14,
    category: "Starter",
    name: "Chilli Paneer",
    type: "Veg",
    description: "Indo-Chinese paneer starter.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Capsicum", quantity: "50g" },
    ],
  },

  {
    id: 15,
    category: "Starter",
    name: "Dragon Chicken",
    type: "Non-Veg",
    description: "Crispy spicy chicken strips.",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
    ingredients: [
      { name: "Chicken", quantity: "250g" },
      { name: "Sauce", quantity: "30ml" },
    ],
  },

  {
    id: 16,
    category: "Main Course",
    name: "Kadai Paneer",
    type: "Veg",
    description: "Paneer cooked in kadai spices.",
    image: "https://images.unsplash.com/photo-1631452180539-96aca7d48617",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Capsicum", quantity: "100g" },
    ],
  },

  {
    id: 17,
    category: "Main Course",
    name: "Dal Makhani",
    type: "Veg",
    description: "Creamy black lentils.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554",
    ingredients: [
      { name: "Black Dal", quantity: "200g" },
      { name: "Cream", quantity: "50ml" },
    ],
  },

  {
    id: 18,
    category: "Main Course",
    name: "Butter Chicken",
    type: "Non-Veg",
    description: "Rich butter chicken curry.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    ingredients: [
      { name: "Chicken", quantity: "250g" },
      { name: "Butter", quantity: "50g" },
    ],
  },

  {
    id: 19,
    category: "Main Course",
    name: "Mutton Biryani",
    type: "Non-Veg",
    description: "Flavorful mutton biryani.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
    ingredients: [
      { name: "Mutton", quantity: "300g" },
      { name: "Rice", quantity: "250g" },
    ],
  },

  {
    id: 20,
    category: "Main Course",
    name: "Palak Paneer",
    type: "Veg",
    description: "Spinach and paneer curry.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    ingredients: [
      { name: "Spinach", quantity: "200g" },
      { name: "Paneer", quantity: "150g" },
    ],
  },

  {
    id: 21,
    category: "Dessert",
    name: "Gulab Jamun",
    type: "Veg",
    description: "Soft sweet dumplings.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    ingredients: [
      { name: "Milk Powder", quantity: "100g" },
      { name: "Sugar Syrup", quantity: "100ml" },
    ],
  },

  {
    id: 22,
    category: "Dessert",
    name: "Rasmalai",
    type: "Veg",
    description: "Creamy Bengali dessert.",
    image: "https://images.unsplash.com/photo-1631452180827-2b2e4c2b8c0c",
    ingredients: [
      { name: "Milk", quantity: "250ml" },
      { name: "Sugar", quantity: "50g" },
    ],
  },

  {
    id: 23,
    category: "Dessert",
    name: "Brownie",
    type: "Veg",
    description: "Chocolate fudge brownie.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    ingredients: [
      { name: "Chocolate", quantity: "100g" },
      { name: "Flour", quantity: "100g" },
    ],
  },

  {
    id: 24,
    category: "Dessert",
    name: "Cheesecake",
    type: "Veg",
    description: "Creamy baked cheesecake.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    ingredients: [
      { name: "Cream Cheese", quantity: "200g" },
      { name: "Sugar", quantity: "50g" },
    ],
  },

  {
    id: 25,
    category: "Sides",
    name: "Butter Naan",
    type: "Veg",
    description: "Soft butter naan.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    ingredients: [
      { name: "Flour", quantity: "150g" },
      { name: "Butter", quantity: "20g" },
    ],
  },

  {
    id: 26,
    category: "Sides",
    name: "Jeera Rice",
    type: "Veg",
    description: "Rice flavored with cumin.",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99",
    ingredients: [
      { name: "Rice", quantity: "250g" },
      { name: "Jeera", quantity: "10g" },
    ],
  },

  {
    id: 27,
    category: "Sides",
    name: "Green Salad",
    type: "Veg",
    description: "Fresh vegetable salad.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    ingredients: [
      { name: "Lettuce", quantity: "100g" },
      { name: "Cucumber", quantity: "100g" },
    ],
  },

  {
    id: 28,
    category: "Sides",
    name: "Tandoori Roti",
    type: "Veg",
    description: "Traditional tandoori bread.",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa0f0a",
    ingredients: [{ name: "Wheat Flour", quantity: "150g" }],
  },
];

export default menuData;
