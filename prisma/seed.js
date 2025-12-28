require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: 'Energy Boost',
        price: 1200,
        imageURL:
          'https://images.unsplash.com/photo-1580910051074-7a7a6a1a8f8a',
        description: 'Bebida energética sabor citrus',
      },
      {
        name: 'Power Fuel',
        price: 1400,
        imageURL:
          'https://images.unsplash.com/photo-1615484477201-9f4953340fab',
        description: 'Alta cafeína para entrenamientos intensos',
      },
      {
        name: 'Night Charge',
        price: 1350,
        imageURL:
          'https://images.unsplash.com/photo-1598899134739-24c46f58f5a4',
        description: 'Energía sostenida sin crash',
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
