import Product from '../models/product.js';

export const getProducts = async (req, res) => {
	try {
		const product = await Product.find()
		res.json(product)
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ error: error.message })
	}
}

export const getProduct = async (req,res) => {
	try {
		const {id} = req.params
		const product = await Product.findById(id)
		if (product) {
			return res.json(product)
		}
		res.status(404).json({ message: 'Product not found!' })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ error: error.message })
	}
}

export const createProduct = async (req, res) => {
	try {
		const product = new Product(req.body)
		await product.save()
		res.status(201).json(product)
	} catch(error) {
		console.log(error.message)
		res.status(500).json({ error: error.message })
	}
}

export const editProduct = async (req, res) => {
	const { id } = req.params
	const product = await Product.findByIdAndUpdate(id, req.body, { new: true })
	res.status(200).json(product)
}

export const deleteProduct = async (req, res) => {
	try {
		const { id } = req.params
		const deleted = await Product.findByIdAndDelete(id)
		if (deleted) {
			return res.status(200).send('Product deleted!')
		}
		throw new Error('Product not found!')
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ error: error.message })
	}
}