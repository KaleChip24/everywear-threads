import "./ProductCreate.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from '../../services/products';
import { Link } from 'react-router-dom';
const ProductCreate = (props) => {
	let navigate = useNavigate();

	const [product, setProduct] = useState({
		item: '',
		description: '',
		imgURL: [],
		price: '',
		size: '',
		style: '',
		brand: '',
		color: '',
	});

	const handleChange = (e) => {
		const { name, value, id } = e.target;
		if (name === 'imgURL') {
			const updatedProduct = { ...product };
			updatedProduct.imgURL[id] = value;
			setProduct(updatedProduct);
		} else {
			setProduct({
				...product,
				[name]: value,
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createProduct(product);
		navigate('/products');
	};

	return (
		<div id='add-product' className='add-item'>
			<div id='left-box'>
				<div id='left-form'>
					<form className='create-form' onSubmit={handleSubmit}>
						<div className='input-list'>
							<h2 id='add-product-header'>Add a New Product</h2>
							<input
								id='add-product-input'
								className='input-price'
								placeholder='Price'
								value={props.price}
								name='price'
								required
								onChange={handleChange}
							/>
							<input
								id='add-product-input'
								className='textarea-description'
								rows={10}
								placeholder='Description'
								value={props.description}
								name='description'
								required
								onChange={handleChange}
							/>
							<input
								className='input-image-link'
								placeholder='Image 1'
								value={props.imgURL}
								name='imgURL'
								id='0'
								required
								onChange={handleChange}
							/>
							<input
								className='input-image-link'
								placeholder='Image 2'
								value={props.imgURL}
								name='imgURL'
								id='1'
								required
								onChange={handleChange}
							/>
							<input
								className='input-image-link'
								placeholder='Image 3'
								value={props.imgURL}
								name='imgURL'
								id='2'
								required
								onChange={handleChange}
							/>
							<input
								id='add-product-input'
								className='input-size'
								placeholder='Size'
								value={props.size}
								name='size'
								required
								autoFocus
								onChange={handleChange}
							/>
							<input
								id='add-product-input'
								className='input-item'
								placeholder='Item'
								value={props.item}
								name='item'
								required
								autoFocus
								onChange={handleChange}
							/>
							<input
								id='add-product-input'
								className='input-style'
								placeholder='Style'
								value={props.style}
								name='style'
								required
								autoFocus
								onChange={handleChange}
							/>
							<input
								id='add-product-input'
								className='input-brand'
								placeholder='Brand'
								value={props.brand}
								name='brand'
								required
								autoFocus
								onChange={handleChange}
							/>
							<input
								id='add-product-input'
								className='input-color'
								placeholder='Color'
								value={props.color}
								name='color'
								required
								autoFocus
								onChange={handleChange}
							/>
						</div>
						<button
							id='add-product-button'
							type='submit'
							className='submit-button'>
							Submit
						</button>
						<br />
						<Link to={`/`}>
							<button id='back-redirect-button'>Back</button>
						</Link>
					</form>
				</div>
			</div>

			<div id='image-container' className='img-container'>
				<img
					className='add-img'
					src='https://github.com/KaleChip24/everywear-threads/raw/zz-dev/assets/SignUp%2BSignIn%2BUpload/Upload.png'
					alt='New Item'></img>
			</div>
		</div>
	);
};

export default ProductCreate;
