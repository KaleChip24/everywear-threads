import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Product = new Schema(
	{
		price: { type: String, required: true },
		item: { type: String, required: true },
		size: { type: String, required: true },
		style: { type: String, required: true },
		color: { type: String, required: true },
		brand: { type: String, required: true },
		description: { type: String, required: true },
		imgURL: [ {type: String, required: true } ]
	},
	{ timestamp: true },
); 

export default mongoose.model('products', Product)