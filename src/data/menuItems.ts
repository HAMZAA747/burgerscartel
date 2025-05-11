// src/data/menuItems.ts

export interface MenuItem {
  category: string;
  name: string;
  price: number | string;
  description: string;
}

export const menuItems: MenuItem[] = [
  // Grilled Burgers
  {
    category: "Grilled Burgers",
    name: "Sweet Chili Syndicate",
    price: 645,
    description: "Tender grilled chicken thigh, smooth yet spicy Sweet Chili Sauce, fresh lettuce, all stacked in a buttery Brioche Bun."
  },
  {
    category: "Grilled Burgers",
    name: "The Fiery Peri Hitman",
    price: 625,
    description: "Juicy grilled chicken thigh, bold & fiery Peri Peri Sauce, fresh lettuce, all stacked in a buttery Brioche Bun."
  },
  {
    category: "Grilled Burgers",
    name: "Malai Boti Supreme",
    price: 625,
    description: "Creamy & richly spiced grilled chicken thigh, loaded with Garlic Mayo, fresh lettuce, all stacked in a buttery Brioche Bun."
  },

  // Beef Burgers
  {
    category: "Beef Burgers",
    name: "Cartel Smash",
    price: 690,
    description: "Crispy-edged beef patty, melted cheese, all stacked in a buttery Brioche Bun."
  },
  {
    category: "Beef Burgers",
    name: "Oklahoma",
    price: 995,
    description: "Beef patties, caramelized onions, melted cheese, all stacked in a buttery Brioche Bun."
  },
  {
    category: "Beef Burgers",
    name: "Big Stack",
    price: 960,
    description: "Double beef patties, melted cheese, all stacked in a buttery Brioche Bun."
  },

  // Crispy Burgers
  {
    category: "Crispy Burgers",
    name: "The Red Agent",
    price: 695,
    description: "Spicy premium Nashville-style fillet, Garlic Mayo sauce, all stacked in a buttery Brioche Bun."
  },
  {
    category: "Crispy Burgers",
    name: "The Runner",
    price: 395,
    description: "Single crispy patty, creamy house blend, all stacked in a buttery Brioche Bun."
  },
  {
    category: "Crispy Burgers",
    name: "The Crunch Dealer",
    price: 425,
    description: "Classic crispy Zinger fillet, house special drizzle, all stacked in a buttery Brioche Bun."
  },

  // Wraps
  {
    category: "Wraps",
    name: "Syndicate Wrap",
    price: 645,
    description: "Juicy grilled chicken glazed in bold Sweet Chili sauce, layered with crisp lettuce, crunchy onions, melted cheese, and premium toppings — all wrapped in a soft, warm tortilla. The Syndicate Wrap doesn’t ask for permission."
  },
  {
    category: "Wraps",
    name: "Hitman Wrap",
    price: 645,
    description: "Flame-grilled chicken thigh drenched in our Fiery Peri sauce, stacked with fresh lettuce, sharp onions, melted cheese, and signature toppings — sealed inside a warm tortilla. The Hitman Wrap strikes with heat and leaves no witnesses."
  },
  {
    category: "Wraps",
    name: "Supreme Wrap",
    price: 645,
    description: "Creamy grilled chicken thigh folded with crisp lettuce, fresh onions, rich melted cheese, and classic toppings — all wrapped in a soft tortilla. The Supreme Wrap brings smooth flavor with cartel-level control."
  },

  // Loaded Fries (placed directly under Wraps in navigation)
  {
    category: "Loaded Fries",
    name: "Nashville Hot Crunch",
    price: 745,
    description: "Crispy Nashville Fillet, Buffalo Sauce, Melted Cheese with toppings."
  },
  {
    category: "Loaded Fries",
    name: "Sweet Chilli Loaded",
    price: 745,
    description: "Grilled Sweet Chilli Thigh, Sweet Chilli Sauce, Melted Cheese with toppings."
  },
  {
    category: "Loaded Fries",
    name: "Fiery Peri Loaded",
    price: 745,
    description: "Grilled Peri Thigh, Fiery Peri Sauce, Melted Cheese with toppings."
  },
  {
    category: "Loaded Fries",
    name: "Malai Boti Loaded",
    price: 745,
    description: "Grilled Malai Thigh Boti, Garlic Mayo, Melted Cheese with toppings."
  },
  {
    category: "Loaded Fries",
    name: "Plain Fries / Cartel Crush",
    price: "245/295",
    description: ""
  },

  // Shakes
  {
    category: "Shakes",
    name: "Lotus",
    price: 550,
    description: "A thick, creamy Lotus shake blended with caramelized Biscoff and topped with crushed biscuit."
  },
  {
    category: "Shakes",
    name: "Vanilla",
    price: 450,
    description: "A thick, silky vanilla shake with a smooth finish and a hint of vanilla flake topping."
  },
  {
    category: "Shakes",
    name: "Oreo",
    price: 450,
    description: "A thick, creamy blend of crushed Oreo cookies, topped with rich cookie crumble."
  },

  // Sides
  {
    category: "Sides",
    name: "Sweet Chili Wings",
    price: 450,
    description: "Crispy golden wings glazed in a glossy Sweet Chili sauce — the perfect clash of heat and sweetness, balanced with cartel-level precision."
  },
  {
    category: "Sides",
    name: "Garlic Mayo Wings",
    price: 450,
    description: "Golden-fried wings tossed in rich, velvety garlic mayo — creamy, garlicky, and dangerously addictive. Smooth hits, every time."
  },
  {
    category: "Sides",
    name: "Fiery Peri Wings",
    price: 450,
    description: "Crispy bone-in wings coated in our bold Fiery Peri sauce — spicy, vibrant, and packed with heat in every bite. Made to leave a mark."
  },
  {
    category: "Sides",
    name: "Tender Strips",
    price: 410,
    description: "Golden, crispy chicken tenders — juicy on the inside, coated for the perfect crunch. Served with your choice of dip. Simple, bold, and always satisfying."
  },
  {
    category: "Sides",
    name: "Nuggets",
    price: 345,
    description: "Bite-sized crispy chicken nuggets with a golden crunch and tender core — served with your favorite cartel dip. Small in size, heavy on flavor."
  },

  // Add-Ons (Drinks & Sauces)
  {
    category: "Add-Ons",
    name: "Regular Drink",
    price: "120/80",
    description: ""
  },
  {
    category: "Add-Ons",
    name: "1.5 LTR Drink",
    price: "200/120",
    description: ""
  },
  {
    category: "Add-Ons",
    name: "Garlic Mayo",
    price: 99,
    description: ""
  },
  {
    category: "Add-Ons",
    name: "Fiery Peri",
    price: 99,
    description: ""
  },
  {
    category: "Add-Ons",
    name: "Sweet Chilli",
    price: 99,
    description: ""
  },

  // Cartel Deals
  {
    category: "Cartel Deals",
    name: "Friends and Fun Deal (3 persons)",
    price: 2690,
    description: "3× Grill burgers (Your Choice), 3× French Fries, 3× Dip sauce (Your Choice), 1× 1.5L Drink."
  },
  {
    category: "Cartel Deals",
    name: "Budget Friendly Deal (2 persons)",
    price: 1180,
    description: "2× Crispy Fried Chicken Burgers (The Runner, The Crunch Dealer), 1× French Fries, 2× Regular Drinks."
  },
  {
    category: "Cartel Deals",
    name: "The Butcher Deal (2 persons)",
    price: 2130,
    description: "1× Cartel Smash, 1× Oklahoma, 2× French Fries, 2× Regular Drinks."
  },
  {
    category: "Cartel Deals",
    name: "Family Feast Deal (4-5 persons)",
    price: 3030,
    description: "2× Grill Burgers (Your Choice), 2× Crispy Fried Chicken Burgers, 1× Cartel Smash, Sides (Nuggets + Fries), 1× 1.5L Drink."
  },
  {
    category: "Cartel Deals",
    name: "Wraps and Side Duo (2 persons)",
    price: 1960,
    description: "2× Grill wraps (Your Choice), 1× Wings (Your Choice), 2× Dip Sauces, 2× Regular Drinks."
  },
  {
    category: "Cartel Deals",
    name: "Shakes & Share Deal (2 persons)",
    price: 1450,
    description: "2× Shakes (Your Choice), Chicken Tender (5pcs), 2× Dip Sauce (Your Choice)."
  },

  // Kiddie Meal
  {
    category: "Kiddie Meal",
    name: "Kiddie Meal",
    price: 785,
    description: "1× The Runner Burger or Chicken Nuggets, 1× Regular Fries + Ketchup Dip, 1× Regular Drink."
  },

  // Theme Days
  {
    category: "Theme Days",
    name: "Wing Wednesday",
    price: "Free with 3 burgers",
    description: "Free wings with 3 burgers."
  },
  {
    category: "Theme Days",
    name: "Shake Sunday",
    price: "Pay extra 195",
    description: "Convert your meal drink to a shake for extra Rs 195."
  }
];
