import "./ProductCreate.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../services/products";
import Layout from "../../components/Layout/Layout";
import { dialogClasses } from "@mui/material";

const ProductCreate = (props) => {
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    item: "",
    description: "",
    imgURL: [],
    price: "",
    size: "",
    style: "",
    brand: "",
    color: "",
  });

  const handleChange = (e) => {
    const { name, value, id } = e.target;
    if (name === "imgURL") {
      const updatedProduct = { ...product }
      updatedProduct.imgURL[id] = value
      setProduct(updatedProduct)
    }
    else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(product);
    navigate("/products");
  };

  return (
      <div className="add-item">
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="input-list">
          <input
            className="input-price"
            placeholder="Price"
            value={props.price}
            name="price"
            required
            onChange={handleChange}
          />
          <input
            className="textarea-description"
            rows={10}
            placeholder="Description"
            value={props.description}
            name="description"
            required
            onChange={handleChange}
          />
          <input
            className="input-image-link"
            placeholder="Image 1"
            value={props.imgURL}
            name="imgURL"
            id="0"
            required
            onChange={handleChange}
          />
          <input
            className="input-image-link"
            placeholder="Image 2"
            value={props.imgURL}
            name="imgURL"
            id="1"
            required
            onChange={handleChange}
          />
          <input
            className="input-image-link"
            placeholder="Image 3"
            value={props.imgURL}
            name="imgURL"
            id="2"
            required
            onChange={handleChange}
          />
          <input
            className="input-size"
            placeholder="Size"
            value={props.size}
            name="size"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-item"
            placeholder="Item"
            value={props.item}
            name="item"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-style"
            placeholder="Style"
            value={props.style}
            name="style"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-brand"
            placeholder="Brand"
            value={props.brand}
            name="brand"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-color"
            placeholder="Color"
            value={props.color}
            name="color"
            required
            autoFocus
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <div className="img-container">
        <img className="add-img" src="https://i.ibb.co/TBG91Ws/Upload.png" alt="New Item"></img>
        </div>
      </div>
  );
};

export default ProductCreate;
