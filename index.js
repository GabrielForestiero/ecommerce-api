import express from 'express';  

const app = express();

const port = process.env.PORT || 3000;

app.get('/products', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Energy Citrus',
      price: 19.99,
      description: 'Bebida energética sabor citrus.',
      imageURL: 'https://hp.widen.net/content/dak8r5vaqq/png/dak8r5vaqq.png?w=800&h=600&dpi=72&color=ffffff00'
    },
    {
      id: 2,
      name: 'Energy Berry',
      price: 21.99,
      description: 'Bebida energética sabor frutos rojos.',
      imageURL: 'https://hp.widen.net/content/dak8r5vaqq/png/dak8r5vaqq.png?w=800&h=600&dpi=72&color=ffffff00'
    }
  ]);
});

app.listen(port, () => {
    console.log('server running on port', port);
});