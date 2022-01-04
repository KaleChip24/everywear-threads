import "./ProductCreate.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../services/products";
import Layout from "../../components/Layout/Layout";

const ProductCreate = (props) => {
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgURL: "",
    price: "",
    size: "",
    item: "",
    style: "",
    brand: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createProduct(product);
    navigate("/products");
  };

  return (
    <Layout user={props.user}>
      <img src="" alt="New Item"></img>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder="Name"
          value={product.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-price"
          placeholder="Price"
          value={product.price}
          name="price"
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-description"
          rows={10}
          placeholder="Description"
          value={product.description}
          name="description"
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={product.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <input
          className="input-size"
          placeholder="Size"
          value={product.size}
          name="size"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-item"
          placeholder="Item"
          value={product.item}
          name="item"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-style"
          placeholder="Style"
          value={product.style}
          name="style"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-brand"
          placeholder="Brand"
          value={product.brand}
          name="brand"
          required
          autoFocus
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default ProductCreate;
