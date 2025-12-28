require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
 await prisma.product.createMany({
  data: [
     {
      name: "Flash Boost",
      price: 1200,
      imageURL: "/products/Lata1.png",
      description: "Bebida energética sabor citrus",
    },
    {
      name: "Energy Boost",
      price: 1200,
      imageURL: "/products/Lata2.png",
      description: "Bebida energética sabor citrus",
    },
    {
      name: "Power Fuel",
      price: 1400,
      imageURL: "/products/Lata3.png",
      description: "Alta cafeína para entrenamientos intensos",
    },
    {
      name: "Night Charge",
      price: 1350,
      imageURL: "/products/Lata4.png",
      description: "Energía sostenida sin crash",
    },
  ],
});


  console.log('✅ Productos seed creados');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
