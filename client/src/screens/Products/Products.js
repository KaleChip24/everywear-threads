import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import Product from "../../components/Product/Product";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
      setSearchResult(allProducts);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
  };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <div className="products">
        {searchResult.map((product, index) => {
          return (
            <Product
              _id={product._id}
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
