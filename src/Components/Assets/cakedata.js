const cakes = [
  {
    id: 1,
    key: 1,
    name: "Chocolate Cake",
    imagery:
      "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHwxfDB8fHww",
    price: 100,
  },
  {
    id: 2,
    key: 2,
    name: "Vanilla Cake",
    imagery:
      "https://images.unsplash.com/photo-1595272568891-123402d0fb3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNha2V8ZW58MHwxfDB8fHww",
    price: 100,
  },
  {
    id: 3,
    key: 3,
    name: "Strawberry Cake",
    imagery:
      "https://images.unsplash.com/photo-1619280795602-5dc3dff1f4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyYXdiZXJyeSUyMGNha2V8ZW58MHwxfDB8fHww",
    price: 200,
  },
  {
    id: 4,
    key: 4,
    name: "Lemon Cake",
    imagery:
      "https://images.unsplash.com/photo-1534353875273-b5887cc1abf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVtb24lMjBjYWtlfGVufDB8MXwwfHx8MA%3D%3D",
    price: 300,
  },
  {
    id: 5,
    key: 5,
    name: "Red Velvet Cake",
    imagery:
      "https://images.unsplash.com/photo-1687877858381-e98c32796861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fFJlZCUyMFZlbHZldCUyMGNha2V8ZW58MHwxfDB8fHww",
    price: 400,
  },
  {
    id: 6,
    key: 6,
    name: "Carrot Cake",
    imagery:
      "https://images.unsplash.com/photo-1501437638401-4addcfd56d3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2Fycm90JTIwY2FrZXxlbnwwfDF8MHx8fDA%3D",
    price: 400,
  },
  {
    id: 7,
    key: 7,
    name: "Coconut Cake",
    imagery:
      "https://images.unsplash.com/photo-1622278326114-159fdbd7f36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29jb251dCUyMGNha2V8ZW58MHwxfDB8fHww",
    price: 300,
  },
  {
    id: 8,
    key: 8,
    name: "Coffee Cake",
    imagery:
      "https://images.unsplash.com/photo-1613687959001-1d02cac9a137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENvZmZlZSUyMGNha2V8ZW58MHwxfDB8fHww",
    price: 200,
  },
  {
    id: 9,
    key: 9,
    name: "Mint Chocolate Chip Cake",
    imagery:
      "https://images.unsplash.com/photo-1585504455924-3d3b0eb2b8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWludCUyMENob2NvbGF0ZSUyMENoaXAlMjBjYWtlfGVufDB8MXwwfHx8MA%3D%3D",
    price: 100,
  },
  {
    id: 10,
    key: 10,
    name: "Raspberry Cake",
    imagery:
      "https://images.unsplash.com/photo-1557925923-33b27f891f88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmFzcGJlcnJ5JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 500,
  },
  {
    id: 11,
    key: 11,
    name: "Pumpkin Cake",
    imagery:
      "https://images.unsplash.com/photo-1579195839728-ed9784accf23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHB1bXBraW4lMjBjYWtlfGVufDB8fDB8fHww",
    price: 200,
  },
  {
    id: 12,
    key: 12,
    name: "Almond Cake",
    imagery:
      "https://images.unsplash.com/photo-1608830597165-a266e1428118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWxtb25kJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 300,
  },
  {
    id: 13,
    key: 13,
    name: "Funfetti Cake",
    imagery:
      "https://butternutbakeryblog.com/wp-content/uploads/2020/03/Funfetti-Cake-683x1024.jpg",
    price: 400,
  },
  {
    id: 14,
    key: 14,
    name: "Hazelnut Cake",
    imagery:
      "https://thepinkberry.in/cdn/shop/products/DSC08613.jpg?v=1684766239&width=600",
    price: 100,
  },
  {
    id: 15,
    key: 15,
    name: "Blueberry Cake",
    imagery:
      "https://images.unsplash.com/photo-1618426703433-cd39e563cf71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ymx1ZWJlcnJ5JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 300,
  },
];

export default cakes;
