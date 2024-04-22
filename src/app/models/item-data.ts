import { ItemObject } from "@interfaces/item-object.interface";

// TODO: implement and this data in json-server and call from there if needed.
export const itemObject: ItemObject = {
  itemtype: [
    "Chicken Masala",
    "French Fries",
    "Coca-Cola",
    "Cheeseburger",
    "Margherita Pizza",
    "Caesar Salad",
    "Chocolate Ice Cream",
    "Grilled Chicken Sandwich",
    "Penne Pasta"
  ],

  typeTitle: {
    "Chicken Masala": ["Regular", "Large"],
    "French Fries": ["Small", "Medium", "Large"],
    "Coca-Cola": ["100ml", "200ml", "250ml"],
    "Cheeseburger": ["Single", "Double", "Triple"],
    "Margherita Pizza": ["Small", "Medium", "Large"],
    "Caesar Salad": ["Regular", "Large"],
    "Chocolate Ice Cream": ["Regular", "Large"],
    "Grilled Chicken Sandwich": ["Regular", "Spicy"],
    "Penne Pasta": ["Alfredo", "Marinara"]
  },

  typePrice: {
    "Chicken Masala": {
      "Regular": 8.99,
      "Large": 10.99
    },
    "French Fries": {
      "Small": 3.99,
      "Medium": 4.99,
      "Large": 5.99
    },
    "Coca-Cola": {
      "100ml": 1.99,
      "200ml": 2.49,
      "250ml": 2.99
    },
    "Cheeseburger": {
      "Single": 6.99,
      "Double": 8.99,
      "Triple": 10.99
    },
    "Margherita Pizza": {
      "Small": 9.99,
      "Medium": 12.99,
      "Large": 15.99
    },
    "Caesar Salad": {
      "Regular": 7.99,
      "Large": 9.99
    },
    "Chocolate Ice Cream": {
      "Regular": 4.49,
      "Large": 5.49
    },
    "Grilled Chicken Sandwich": {
      "Regular": 7.49,
      "Spicy": 7.99
    },
    "Penne Pasta": {
      "Alfredo": 11.99,
      "Marinara": 10.99
    }
  }
};

