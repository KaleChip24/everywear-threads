import "./ProductEdit.css";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, updateProduct } from "../../services/products";

const ProductEdit = (props) => {
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgURL: "",
    price: "",
  });
};

let { id } = useParams();

useEffect(() => {
  const fetchProduct = async () => {
    const product = await getProduct(id);
    setProduct(product);
  };
  fetchProduct();
}, [id]);

const handleChange = (event) => {
  const { name, value } = event.target;
  setProduct({
    ...product,
    [name]: value,
  });
};

const handleSubmit = async (event) => {
  event.preventDefault();
  await updateProduct(id, product);
  navigate(`/products/${id}`);
};

return <div></div>;

export default ProductEdit;
