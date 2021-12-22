import db from '../db/connection.js';
import Product from '../models/product.js';
import User from '../models/user'
import bcrypt from 'bcrypt'

const insertData = async () => {
  await db.dropDatabase()

  const user1 = new User({
    username: 'TunaFish',
    email: 'tuna@fish.gmail.com',
    password_digest: await bcrypt.hash('$IamI@*L*$$3R', 11)
  })
  await user1.save()

  const user2 = new User({
    username: 'Vinnie',
    email: "mycousin@mobmovie.com",
    password_digest: await bcrypt.hash('Lola%$h0WGRRl22', 11)
  })
  await user2.save()

  const products = [
    {
      price: '29.95',
      item: 'Jeans',
      size: 'M',
      style: 'streetwear',
      color: 'Blue',
      brand: 'Levi',
      description: 'Something corny and cliche',
      imgURL:
        'https://i.pinimg.com/736x/76/4a/62/764a62bea10d4dc0211d1cc8e6aa27e4.jpg',
    },
    {
      price: '39.95',
      item: 'Cardigan',
      size: 'XL',
      style: 'Vintage',
      color: 'Pink',
      brand: 'Northman',
      description: 'Something corny and cliche',
      imgURL:
        'https://cdn.shopify.com/s/files/1/0021/5629/8301/products/f4eca61300cc9523e3dd2037989f4fa6_1080x.jpg?v=1618284838',
    },
    {
      price: '11.99',
      item: 'T-Shirt',
      size: 'XL',
      style: 'Sports Wear',
      color: 'Grey',
      brand: 'Nike',
      description: 'Something corny and cliche',
      imgURL:
        'https://cdn.shopify.com/s/files/1/0408/9909/products/Nike-Sportswear-Club-T-Shirt---DK-Driftwood-White-AR4997-258---11-22-2021---01_1080x.jpg?v=1637620638',
    },
    {
      price: '4.99',
      item: 'T-Shirt',
      size: 'XL',
      style: 'Sports Wear',
      color: 'Grey',
      brand: 'Nike',
      description: 'Something corny and cliche',
      imgURL:
        'https://cdn.shopify.com/s/files/1/0408/9909/products/Nike-Sportswear-Club-T-Shirt---DK-Driftwood-White-AR4997-258---11-22-2021---01_1080x.jpg?v=1637620638',
    },
    {
      price: '17.99',
      item: 'T-Shirt',
      size: 'XL',
      style: 'Sports Wear',
      color: 'Grey',
      brand: 'Nike',
      description: 'Something corny and cliche',
      imgURL:
        'https://cdn.shopify.com/s/files/1/0408/9909/products/Nike-Sportswear-Club-T-Shirt---DK-Driftwood-White-AR4997-258---11-22-2021---01_1080x.jpg?v=1637620638',
    },
    {
      price: '16.99',
      item: 'T-Shirt',
      size: 'XL',
      style: 'Sports Wear',
      color: 'Grey',
      brand: 'Nike',
      description: 'Something corny and cliche',
      imgURL:
        'https://cdn.shopify.com/s/files/1/0408/9909/products/Nike-Sportswear-Club-T-Shirt---DK-Driftwood-White-AR4997-258---11-22-2021---01_1080x.jpg?v=1637620638',
    },
    {
      price: '35',
      item: 'T-Shirt',
      size: 'XL',
      style: 'Sports Wear',
      color: 'Grey',
      brand: 'Nike',
      description: 'Something corny and cliche',
      imgURL:
        'https://cdn.shopify.com/s/files/1/0408/9909/products/Nike-Sportswear-Club-T-Shirt---DK-Driftwood-White-AR4997-258---11-22-2021---01_1080x.jpg?v=1637620638',
    },
    {
      price: '7.99',
      item: 'T-Shirt',
      size: 'XL',
      style: 'Sports Wear',
      color: 'Grey',
      brand: 'Nike',
      description: 'Something corny and cliche',
      imgURL:
        'https://cdn.shopify.com/s/files/1/0408/9909/products/Nike-Sportswear-Club-T-Shirt---DK-Driftwood-White-AR4997-258---11-22-2021---01_1080x.jpg?v=1637620638',
    },
    {
      price: '19.99',
      item: 'Jeans',
      size: 'SM',
      style: 'Causual',
      color: 'Grey',
      brand: 'Guess',
      description: 'Something corny and cliche',
      imgURL:
        'https://cdn.shopify.com/s/files/1/0408/9909/products/Nike-Sportswear-Club-T-Shirt---DK-Driftwood-White-AR4997-258---11-22-2021---01_1080x.jpg?v=1637620638',
    },
    {
      price: '14.99',
      item: 'T-Shirt',
      size: 'XL',
      style: 'Shoes',
      color: 'Grey',
      brand: 'Convers',
      description: 'Something corny and cliche',
      imgURL:
        'https://cdn.shopify.com/s/files/1/0408/9909/products/Nike-Sportswear-Club-T-Shirt---DK-Driftwood-White-AR4997-258---11-22-2021---01_1080x.jpg?v=1637620638',
    },
  ]

  await Product.insertMany(products)
  console.log('Created product!')
  db.close()
}

insertData()