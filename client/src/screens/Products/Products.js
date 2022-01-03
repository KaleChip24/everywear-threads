import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import { Layout, Product } from "../../components";

export default function Products(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
      console.log(setProducts);
    };
    fetchProducts();
  }, []);

  return (
    <Layout user={props.user}>
      <div className="products">
        {products.map((product, index) => {
          return (
            <div>
              <div className="productImage">
                {product.imgURL.map((image) => {
                  return <img src={image} alt={product.name}></img>;
                })}
              </div>
              <h2>{product.item}</h2>
              <h3>By {product.brand}</h3>
              <h5>{`$${product.price}`}</h5>
              <h5>{product.color}</h5>
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
