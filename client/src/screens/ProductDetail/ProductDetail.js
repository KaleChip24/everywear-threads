import { useState, useEffect } from 'react';
import './ProductDetail.css';
import Layout from '../../components/Layout/Layout';
import { getProduct, deleteProduct } from '../../services/products';
import { useParams, Link, Navigate } from 'react-router-dom';
import DetailsCarousel from '../../components/DetailsCarousel/DetailsCarousel';

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await deleteProduct(id, product);
    setDeleted(true)
  };

  if (isDeleted) {
    return <Navigate to={`/products`} />;
  }

  if (!isLoaded) {
    return <h1>Loading in Style...</h1>;
  }

  return (
    <Layout>
      <div className='product-detail'>
        {/* <DetailsCarousel /> */}
        <div className="details-imgs">
          {product.imgURL.map((image, id) => {
            return (
              <img className="product-image" src={image} alt={props.imgURL}></img>
            );
          })}
        </div>
        <table className='details'>
          <tr className='item'>
            <th scope="row">{product.item}</th>
            <th scope="row">${product.price}</th>
          </tr>
          <tr className='size'>
            <th scope="row">Size:</th>
            <td>{product.size}</td>
          </tr>
          <tr className='style'>
            <th scope="row">Style:</th>
            <td>{product.style}</td>
          </tr>
          <tr className='brand'>
            <th scope="row">Brand:</th>
            <td>{product.brand}</td>
          </tr>
          <tr className='color'>
            <th scope="row">Color:</th>
            <td>{product.color}</td>
          </tr>
        </table>
        <p>Product Description: {product.description}</p>
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
            onClick={handleSubmit}
          >
            Delete
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
