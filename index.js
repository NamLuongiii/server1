const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: "Bag"
        },
        {
            id: 2,
            name: "Dress"
        },
        {
            id: 3,
            name: "Shirt"
        },
    ];

    res.json(products);
  })

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})