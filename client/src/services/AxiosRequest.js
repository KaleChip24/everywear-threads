import axios from 'axios';

const apiUrl = `https://products-api-01.herokuapp.com/api`;

export const getProducts = async () => {
	try {
		const response = await axios(`${apiUrl}/products`);
		const products = response.data;
		return products;
	} catch (error) {
		throw error;
	}
};

export const getProduct = async (id) => {
	try {
		const response = await axios(`${apiUrl}/products/${id}`);
		const product = response.data;
		return product;
	} catch (error) {
		throw error;
	}
};

export const createProduct = async (product) => {
	try {
		const response = await axios.post(`${apiUrl}/products`, product);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const updateProduct = async (id, product) => {
	try {
		const response = await axios.put(`${apiUrl}/products/${id}`, product);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const deleteProduct = async (id) => {
	try {
		const response = await axios.delete(`${apiUrl}/products/${id}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};
