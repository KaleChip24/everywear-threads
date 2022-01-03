import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import Product from "../../components/Product/Product";
import Layout from "../../components/Layout/Layout";

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
            <Product
              item={product.item}
              brand={product.brand}
              price={product.price}
              color={product.color}
              descriprion={product.description}
              imgURL={product.imgURL}
              key={index}
            />
          );
        })}
      </div>
    </Layout>
  );
}
