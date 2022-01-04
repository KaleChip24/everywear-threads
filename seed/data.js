import db from "../db/connection.js";
import Product from "../models/product.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "TunaFish",
    email: "tuna@fish.gmail.com",
    password_digest: await bcrypt.hash("$IamI@*L*$$3R", 11),
  });
  await user1.save();

  const user2 = new User({
    username: "Vinnie",
    email: "mycousin@mobmovie.com",
    password_digest: await bcrypt.hash("Lola%$h0WGRRl22", 11),
  });
  await user2.save();

  const products = [
    {
      price: "29.95",
      item: "Dior T-Shirt",
      size: "M",
      style: "streetwear",
      color: "White",
      brand: "Dior",
      description: "Something corny and cliche",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item15/IMG_0212.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item15/IMG_0213.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item15/IMG_0215.JPG",
      ],
    },
    {
      price: "39.95",
      item: "Balmain Shirt",
      size: "XL",
      style: "T-Shirt",
      color: "Black",
      brand: "Balmain",
      description: "Something corny and cliche",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item14/IMG_0218.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item14/IMG_0219.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item14/IMG_0220.JPG",
      ],
    },
    {
      price: "64.99",
      item: "Dior Sweatshirt",
      size: "XL",
      style: "Sweatwear",
      color: "Black",
      brand: "Dior",
      description: "Something corny and cliche",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item13/IMG_0222.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item13/IMG_0224.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item13/IMG_0226.JPG",
      ],
    },
    {
      price: "219.99",
      item: "YSL Trench Coat",
      size: "L",
      style: "Outerwear",
      color: "Black",
      brand: "YSL",
      description: "Something corny and cliche",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item12/IMG_0230.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item12/IMG_0231.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item12/IMG_0232.JPG",
      ],
    },
    {
      price: "69.99",
      item: "Louis Vutton Belt",
      size: "32 in",
      style: "Accessory",
      color: "Grey",
      brand: "Louis Vutton",
      description:
        "Want to make your outfit POP! Wear this and recieve compliments all evening long.",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/8ead015efa6e546798ca53ae913673d90e69a8a4/assets/inventory/item1/IMG_0173.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/8ead015efa6e546798ca53ae913673d90e69a8a4/assets/inventory/item1/IMG_0174.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/8ead015efa6e546798ca53ae913673d90e69a8a4/assets/inventory/item1/IMG_0176.JPG",
      ],
    },
    {
      price: "79.95",
      item: "Celine Shoes",
      size: "10.5",
      style: "Shoes",
      color: "Black",
      brand: "Celine",
      description: "Something corny and cliche",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item3/IMG_0166.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item3/IMG_0167.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item3/IMG_0170.JPG",
      ],
    },
    {
      price: "89.95",
      item: "Celine Jacket",
      size: "XL",
      style: "Outerwear",
      color: "Black",
      brand: "Celine",
      description: "Something corny and cliche",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item4/IMG_0184.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item4/IMG_0185.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item4/IMG_0188.JPG",
      ],
    },
    {
      price: "39.95",
      item: "YSL Shirt",
      size: "SM",
      style: "T-Shirt",
      color: "White",
      brand: "YSL",
      description: "Something corny and cliche",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item10/IMG_0244.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item10/IMG_0245.JPG",
      ],
    },
    {
      price: "109.95",
      item: "YSL",
      size: "L",
      style: "Outerwear",
      color: "Green",
      brand: "YSL",
      description: "Something corny and cliche",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item11/IMG_0236.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item11/IMG_0237.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item11/IMG_0238.JPG",
      ],
    },
    {
      price: "109.95",
      item: "Granddad Sweater",
      size: "L",
      style: "Outerwear",
      color: "Green",
      brand: "Houndstooth",
      description: "Something corny and cliche",
      imgURL: [
        "https://cdnimg.emmiol.com/E/202109/img_original-FBI0108TO-0820971284.jpg",
        "https://cdnimg.emmiol.com/E/202109/img_original-FBI0108TO-0820612792.jpg",
        "https://cdnimg.emmiol.com/E/202109/img_original-FBI0108TO-082012834.jpg",
      ],
    },
    {
      price: "49.99",
      item: "Your Granddads sweater",
      size: "L",
      style: "Vintage Sweater",
      color: "Olive Green",
      brand: "Redgray",
      description: "Wanna smell like moth balls and Bengay? If so buy this sweater",
      imgURL: [
        'https://cdnimg.emmiol.com/E/202109/img_original-FBI0107TO-0203310512.jpg',
        'https://cdnimg.emmiol.com/E/202109/img_original-FBI0107TO-02031059124.jpg',
        'https://cdnimg.emmiol.com/E/202109/img_original-FBI0107TO-0203210851.jpg',
      ],
    },
    {
      price: "53",
      item: "Jacket",
      size: "L",
      style: "Varsity Jacket",
      color: "Blue",
      brand: "Hysterics",
      description: "Wanna dress like a Jock without actually being one? You have to buy this jacket to impress the cheerleaders!",
      imgURL: [
        'https://cdnimg.emmiol.com/E/202111/img_original-QBK0036OU-0500809312.jpg',
        'https://cdnimg.emmiol.com/E/202111/img_original-QBK0036OU-050002715.jpg',
        'https://cdnimg.emmiol.com/E/202111/img_original-QBK0036OU-050063519.jpg',
      ],
    },
    {
      price: "69",
      item: "Jacket",
      size: "XL",
      style: "Varsity Jacket",
      color: "Black",
      brand: "Avdiaiy",
      description: "Wanna dress like a Jock without actually being one? You have to buy this jacket to impress the cheerleaders!",
      imgURL: [
        'https://cdnimg.emmiol.com/E/202111/img_original-QBK0211OU-222387603.jpg',
        'https://cdnimg.emmiol.com/E/202111/img_original-QBK0211OU-222327608.jpg',
        'https://cdnimg.emmiol.com/E/202111/img_original-QBK0211OU-22239101225.jpg',
      ],
    },
  ];

  await Product.insertMany(products);
  console.log("Created product!");
  db.close();
};

insertData();
