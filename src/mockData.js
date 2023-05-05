export const warehouseData = [
  {
    id: 5,
    name: "Mock Warehouse Name",
    status: "Hazard",
    size: 10,
    products: [
      {
        name: "tomato",
        type: "Hazard",
        unit: "5",
      },
    ],
    history: [
      {
        history_type: "Import",
        productId: "someid",
        amount: 5,
        created_At: "2022-05-18",
      },
    ],
  },
  {
    id: 55,
    name: "Mock Warehouse Name 2",
    status: "Non Hazard",
    size: 25,
    products: [
      {
        id: 1,
        name: "Carrot",
        type: "Non Hazard",
        unit: "7",
      },
      {
        id: 33,
        name: "Lemon",
        type: "Non Hazard",
        unit: "12",
      },
    ],
    history: [
      {
        history_type: "Import",
        productId: "33",
        amount: 5,
        created_At: "2022-05-18",
      },
      {
        history_type: "Import",
        productId: "1",
        amount: 5,
        created_At: "2022-05-17",
      },
    ],
  },
];

export const warehouses = [
  {
    name: "New England",
    status: "Non Hazards",
    size: 25,
    products: [
      {
        name: "Patatoes2",
        type: "Non Hazard",
        unit: 5,
      },
    ],
    history: [
      {
        history_type: "Import",
        productId: "testId",
        amount: 2,
        created_At: "2023-03-21",
      },
    ],
  },
];

export const products = [
  {
    id: 1,
    name: "Tomato",
    type: "Non Hazard",
    unit: 5,
  },
  {
    id: 2,
    name: "Lemon",
    type: "Non Hazard",
    unit: 2,
  },
  {
    id: 3,
    name: "Oranges",
    type: "Hazard",
    unit: 10,
  },
];
