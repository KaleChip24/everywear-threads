import { useState, useEffect } from 'react';
import './ProductDetail.css';
import Layout from '../../components/Layout/Layout';
import { getProduct, deleteProduct } from '../../services/products';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      <div className='product-detail'>
      {product.imgURL.map((image) => {
          return (
            <img className="product-image" src={image} alt={props.imgURL}></img>
          );
        })}
        <div className='detail'>
        <div className='item'>{product.item}</div>
        <div className='price'>Price: {`${product.price}`}</div>
          <div className='item'>Size: {product.size}</div>
          <div className='item'>Style: {product.style}</div>
          <div className='brand'>Brand: {product.brand}</div>
          <div className='description'>Product Description: {product.description}</div>
          <div className='color'>Color: {product.color}</div>
          <div className='button-container'>
            <button className='edit-button'>
              <Link
                className='edit-link'
                to={`/products/${product._id}/edit`}
              >
                Edit
              </Link>
            </button>
            <button
              className='delete-button'
              onClick={() => deleteProduct(product._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
