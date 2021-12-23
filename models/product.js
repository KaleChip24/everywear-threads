import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Product = new Schema(
<<<<<<< HEAD
	{
		price: { type: String, required: true },
		item: { type: String, required: true },
		size: { type: String, required: true },
		style: { type: String, required: true },
		color: { type: String, required: true },
		brand: { type: String, required: true },
		description: { type: String, required: true },
		imgURL: { type: String, required: true },
	},
	{ timestamp: true },
); 
=======
  {
    price: { type: String, required: true },
    item: { type: String, required: true },
    size: { type: String, required: true },
    style: { type: String, required: true },
    color: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    imgURL: { type: Array, required: true },
  },
  { timestamp: true }
)
>>>>>>> c8e954b76651a9391a5aa39c326d3da90b925cc0

export default mongoose.model('products', Product)