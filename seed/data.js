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
      price: "72.95",
      item: "T-Shirt",
      size: "Small",
      style: "Streetwear",
      color: "White",
      brand: "Dior",
      description:
        "Dress to impress with this fresh Dior shirt. Did you catch the rhyme?",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item15/IMG_0212.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item15/IMG_0213.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item15/IMG_0215.JPG",
      ],
    },
    {
      price: "89.95",
      item: "T-Shirt",
      size: "Small",
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
      price: "109.99",
      item: "Sweater",
      size: "Extra-Large",
      style: "Streetwear",
      color: "Black",
      brand: "Dior",
      description: "Shock the world with this Dior Sweater",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item13/IMG_0222.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item13/IMG_0224.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item13/IMG_0226.JPG",
      ],
    },
    {
      price: "349.99",
      item: "Jacket",
      size: "Large",
      style: "Outerwear",
      color: "Black",
      brand: "YSL",
      description:
        "The coat is a modern and refined variation of a timeless design. Crafted in blue wool and mohair canvas it is embellished with a white cotton faille contrasting overlay in the back. Its single-breasted classic fit is further enhanced by topstitching details and hallmark fabric-covered buttons. The contemporary style will embellish any of the season's outfits.",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item12/IMG_0230.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item12/IMG_0231.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item12/IMG_0232.JPG",
      ],
    },
    {
      price: "129.99",
      item: "Belt",
      size: "32 in",
      style: "Accessory",
      color: "Grey",
      brand: "Louis Vuitton",
      description:
        "This reversible belt associates the iconic LV Initiales buckle in dark ruthenium with our new Monogram Eclipse canvas. Subtly branded, it is a perfect match for the Maison's leather goods and shoes.",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/8ead015efa6e546798ca53ae913673d90e69a8a4/assets/inventory/item1/IMG_0173.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/8ead015efa6e546798ca53ae913673d90e69a8a4/assets/inventory/item1/IMG_0174.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/8ead015efa6e546798ca53ae913673d90e69a8a4/assets/inventory/item1/IMG_0176.JPG",
      ],
    },
    {
      price: "179.95",
      item: "Shoes",
      size: "10.5",
      style: "Shoes",
      color: "Black",
      brand: "Celine",
      description:
        "Celine drugstore derbies in shiny calfskin with rounded toe.",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item3/IMG_0166.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item3/IMG_0167.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item3/IMG_0170.JPG",
      ],
    },
    {
      price: "119.95",
      item: "Jacket",
      size: "Extra-Large",
      style: "Outerwear",
      color: "Black",
      brand: "Celine",
      description: "Athletic teddy souvenir in satin.",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item4/IMG_0184.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item4/IMG_0185.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item4/IMG_0188.JPG",
      ],
    },
    {
      price: "89.95",
      item: "Shirt",
      size: "Small",
      style: "T-Shirt",
      color: "White",
      brand: "Amiri",
      description:
        "100% cotton and made in France. You're mostly paying for the airfare of this shirt.",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item10/IMG_0244.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item10/IMG_0245.JPG",
      ],
    },
    {
      price: "109.95",
      item: "Jacket",
      size: "Large",
      style: "Outerwear",
      color: "Green",
      brand: "Grandfather",
      description:
        "This jacket is made with 100% recycled foreskin. Less waste in the world. More great clothes for you.",
      imgURL: [
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item11/IMG_0236.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item11/IMG_0237.JPG",
        "https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/inventory/item11/IMG_0238.JPG",
      ],
    },
    {
      price: "109.95",
      item: "Sweater",
      size: "Large",
      style: "Vintage",
      color: "Green",
      brand: "Houndstooth",
      description: "This screams I wear my Granddads clothes. ",
      imgURL: [
        "https://cdnimg.emmiol.com/E/202109/img_original-FBI0108TO-0820971284.jpg",
        "https://cdnimg.emmiol.com/E/202109/img_original-FBI0108TO-0820612792.jpg",
        "https://cdnimg.emmiol.com/E/202109/img_original-FBI0108TO-082012834.jpg",
      ],
    },
    {
      price: "49.99",
      item: "Sweater",
      size: "Large",
      style: "Vintage",
      color: "Olive Green",
      brand: "Redgray",
      description:
        "Wanna smell like moth balls and Bengay? If so buy this sweater",
      imgURL: [
        "https://cdnimg.emmiol.com/E/202109/img_original-FBI0107TO-0203310512.jpg",
        "https://cdnimg.emmiol.com/E/202109/img_original-FBI0107TO-02031059124.jpg",
        "https://cdnimg.emmiol.com/E/202109/img_original-FBI0107TO-0203210851.jpg",
      ],
    },
    {
      price: "53",
      item: "Jacket",
      size: "Large",
      style: "Outerwear",
      color: "Blue",
      brand: "Hysterics",
      description:
        "Wanna dress like a Jock without actually being one? You have to buy this jacket to impress the cheerleaders!",
      imgURL: [
        "https://cdnimg.emmiol.com/E/202111/img_original-QBK0036OU-0500809312.jpg",
        "https://cdnimg.emmiol.com/E/202111/img_original-QBK0036OU-050002715.jpg",
        "https://cdnimg.emmiol.com/E/202111/img_original-QBK0036OU-050063519.jpg",
      ],
    },
    {
      price: "69",
      item: "Jacket",
      size: "Extra-Large",
      style: "Outerwear",
      color: "Black",
      brand: "Avdiaiy",
      description:
        "Wanna dress like a Jock without actually being one? You have to buy this jacket to impress the cheerleaders!",
      imgURL: [
        "https://cdnimg.emmiol.com/E/202111/img_original-QBK0211OU-222387603.jpg",
        "https://cdnimg.emmiol.com/E/202111/img_original-QBK0211OU-222327608.jpg",
        "https://cdnimg.emmiol.com/E/202111/img_original-QBK0211OU-22239101225.jpg",
      ],
    },
    {
      price: "69",
      item: "Jacket",
      size: "Extra-Large",
      style: "Outerwear",
      color: "Black",
      brand: "Avdiaiy",
      description:
        "Wanna dress like a Jock without actually being one? You have to buy this jacket to impress the cheerleaders!",
      imgURL: [
        "https://cdnimg.emmiol.com/E/202111/img_original-QBK0211OU-222387603.jpg",
        "https://cdnimg.emmiol.com/E/202111/img_original-QBK0211OU-222327608.jpg",
        "https://cdnimg.emmiol.com/E/202111/img_original-QBK0211OU-22239101225.jpg",
      ],
    },
    {
      price: "12",
      item: "Ring",
      size: "ONE SIZE",
      style: "Accesory",
      color: "Silver",
      brand: "Demon",
      description:
        "Wear this Demon Ring if you want to add a little flair to your outfit",
      imgURL: [
        "https://cdnimg.emmiol.com/E/202111/img_original-JBK0193AC-220032517.jpg",
        "https://cdnimg.emmiol.com/E/202111/img_original-JBK0193AC-2200912032.jpg",
        "https://cdnimg.emmiol.com/E/202111/img_original-JBK0193AC-220098602.jpg",
      ],
    },
    {
      price: "9",
      item: "Ring",
      size: "ONE SIZE",
      style: "Accesory",
      color: "Silver",
      brand: "Funky Brewster",
      description:
        "Wear this Demon Ring if you want to add a little flair to your outfit",
      imgURL: [
        "https://cdnimg.emmiol.com/E/202110/img_original-JBJ0120AC-2000973512.jpg",
        "https://cdnimg.emmiol.com/E/202110/img_original-JBJ0120AC-200097841.jpg",
      ],
    },
    {
      price: "16.99",
      item: "Ring",
      size: "ONE SIZE",
      style: "Accessory",
      color: "Gold",
      brand: "Funky Brewster",
      description: "Do you wanna emcompass both sides of the same coin",
      imgURL: [
        "https://cdnimg.emmiol.com/E/202106/img_original-JBF0169AC-250089627.jpg",
        "https://cdnimg.emmiol.com/E/202106/img_original-JBF0169AC-2500409123.jpg",
      ],
    },
    {
      price: "14.99",
      item: "Ring",
      size: "ONE SIZE",
      style: "Accesory",
      color: "Gold",
      brand: "Funky Brewster",
      description:
        "Buy this ring and give the other one to your partner so that you two will never be apart. ",
      imgURL: [
        "https://cdnimg.emmiol.com/E/202111/img_original-CBK0377AC-1621873122.jpg",
        "https://cdnimg.emmiol.com/E/202111/img_original-CBK0377AC-1621610579.jpg",
        "https://cdnimg.emmiol.com/E/202111/img_original-CBK0377AC-1621731008.jpg",
      ],
    },
    {
      price: "69.99",
      item: "Sun Glasses",
      size: "ONE SIZE",
      style: "Accessory",
      color: "Black",
      brand: "Eyevan",
      description: "Yoko ono once owned a pair of these. Need I say more. ",
      imgURL: [
        "https://cdn.shopify.com/s/files/1/0049/9112/products/EYEVAN7285LUBINYTBKOS_01_2048x2048.jpg?v=1629139193",
        "https://cdn.shopify.com/s/files/1/0049/9112/products/EYEVAN_7285_LUBIN_YT_BK_OS_02_2048x2048.jpg?v=1629139083",
      ],
    },
    {
      price: "49.99",
      item: "Sun Glasses",
      size: "ONE SIZE",
      style: "Accessory",
      color: "Yellow",
      brand: "Eyevan",
      description:
        "Need a bit a color! Buy these stunning frames to give you the confidence you need to walk into any party like a Boss!. ",
      imgURL: [
        "https://cdn.shopify.com/s/files/1/0049/9112/products/RETROSUPERFUTUREDREWHOTYELLOWOSI9CO_2_2048x2048.jpg?v=1619644357",
        "https://cdn.shopify.com/s/files/1/0049/9112/products/RETROSUPERFUTUREDREWHOTYELLOWOSI9CO_2_2048x2048.jpg?v=1619644357",
        "https://cdn.shopify.com/s/files/1/0049/9112/products/RETROSUPERFUTUREDREWHOTYELLOWOSI9CO_4_2048x2048.jpg?v=1619644521",
      ],
    },
    {
      price: "21",
      item: "Hat",
      size: "ONE SIZE",
      style: "Accessory",
      color: "Beige",
      brand: "B.A.R.",
      description: "Let everyone know you're a reddit conspricay theorist. ",
      imgURL: [
        "https://cdn.shopify.com/s/files/1/0011/3013/5596/products/buckethat2_1100x.png?v=1596663668",
        "https://cdn.shopify.com/s/files/1/0011/3013/5596/products/buckethat3_1100x.png?v=1596663758",
        "https://cdn.shopify.com/s/files/1/0011/3013/5596/products/buckethatsquare1_1100x.png?v=1596664458",
      ],
    },
    {
      price: "22.39",
      item: "Hat",
      size: "ONE SIZE",
      style: "Accessory",
      color: "Red",
      brand: "SoUnFunny",
      description:
        "Never forget that a woman once chose a Bee over a man. So BEE COOL. ",
      imgURL: [
        "https://i.etsystatic.com/16208149/r/il/625ea2/1699454050/il_794xN.1699454050_mxs2.jpg",
        "https://i.etsystatic.com/16208149/r/il/69f85b/1699454052/il_794xN.1699454052_1oyq.jpg",
        "https://i.etsystatic.com/16208149/r/il/4b4769/1699454064/il_794xN.1699454064_rdhh.jpg",
      ],
    },
    {
      price: "11.29",
      item: "Hat",
      size: "ONE SIZE",
      style: "Accessory",
      color: "Green",
      brand: "SoUnFunny",
      description: "Just a Hat with a duck on it.",
      imgURL: [
        "https://img.ltwebstatic.com/images3_pi/2021/08/31/16303411089d4e3013a266790258f64456ffae143a_thumbnail_600x.webp",
        "https://img.ltwebstatic.com/images3_pi/2021/08/31/16303411160505d1cd447815fc689b45582a79590e_thumbnail_600x.webp",
        "https://img.ltwebstatic.com/images3_pi/2021/08/31/1630341110ffcd67723936f48df346a27732e8bf2f_thumbnail_600x.webp",
      ],
    },
    {
      price: "368.99",
      item: "Dress",
      size: "Medium",
      style: "Vintage",
      color: "Sheer",
      brand: "Rosamosario",
      description: "Buy this if you're planning on attending the MET Gala.",
      imgURL: [
        "https://cdna.lystit.com/520/650/n/photos/rosamosario/1011b056/rosamosario-Black-La-Moglie-Di-Zorro-Skirt.jpeg",
        "https://cdna.lystit.com/520/650/n/photos/rosamosario/0bfc69b4/rosamosario-Black-La-Moglie-Di-Zorro-Skirt.jpeg",
        "https://cdna.lystit.com/520/650/n/photos/rosamosario/0e0c5dfb/rosamosario-Black-La-Moglie-Di-Zorro-Skirt.jpeg",
      ],
    },
    {
      price: "72.99",
      item: "Dress",
      size: "Medium",
      style: "Vintage",
      color: "Grey",
      brand: "Emmy's",
      description: "Wear this and feel like you're listening to Ocean Avenue.",
      imgURL: [
        "https://images.urbndata.com/is/image/FreePeople/63076459_020_c/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        "https://images.urbndata.com/is/image/FreePeople/63076459_020_a/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        "https://images.urbndata.com/is/image/FreePeople/63076459_020_0/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
      ],
    },
    {
      price: "64.99",
      item: "Dress",
      size: "Medium",
      style: "Vintage",
      color: "Grey",
      brand: "Svitla",
      description: ' "Siri, play Phil Gerus Time & Again" ',
      imgURL: [
        "https://i.etsystatic.com/21015833/r/il/b22aa1/2093299588/il_794xN.2093299588_buze.jpg",
        "https://i.etsystatic.com/21015833/r/il/7473e9/2140856605/il_794xN.2140856605_6kan.jpg",
        "https://i.etsystatic.com/21015833/r/il/7498c8/2027778274/il_794xN.2027778274_8eka.jpg",
      ],
    },
    {
      price: "45.99",
      item: "Earrings",
      size: "ONE SIZE",
      style: "Accessory",
      color: "Gold",
      brand: "Milky Way",
      description: "Accessories are everyones best friend.",
      imgURL: [
        "https://cdn.shopify.com/s/files/1/0764/4005/products/06-13-19-12_1800x1800.jpg?v=1605475063",
        "https://cdn.shopify.com/s/files/1/0764/4005/products/GCER46-4_1800x1800.jpg?v=1605471936",
        "https://cdn.shopify.com/s/files/1/0764/4005/products/GCER46-1_1800x1800.jpg?v=1605477552",
      ],
    },
    {
      price: "45.99",
      item: "Earrings",
      size: "ONE SIZE",
      style: "Accessory",
      color: "Gold",
      brand: "Milky Way",
      description: "Accessories are everyones best friend.",
      imgURL: [
        "https://cdn.shopify.com/s/files/1/2065/2523/products/v--1049106525__1049417171_550x528.jpg?v=1514281433",
        "https://cdn.shopify.com/s/files/1/2065/2523/products/Women-Earrings-Unique-Natural-Druzy-Dangle-Earrings-Designer-Bohemian-Earrings-US-European-Drusy-Jewelry-Dropshipping_058798e7-9bd5-426e-8ed8-32f4577c231b_514x440.jpg?v=1514281433",
        "https://cdn.shopify.com/s/files/1/2065/2523/products/v--1144439664__1602033037_527x476.jpg?v=1514281433",
      ],
    },
  ];

  await Product.insertMany(products);
  console.log("Created product!");
  db.close();
};

insertData();
