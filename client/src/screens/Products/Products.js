import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import Product from "../../components/Product/Product";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";
import "./Products.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("name-ascending");

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
      setSearchResult(allProducts);
    };
    fetchProducts();
  }, []);

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }
    switch (type) {
      case "name-ascending":
        setSearchResult(AZ(searchResult));
        break;
      case "name-descending":
        setSearchResult(ZA(searchResult));
        break;
      case "price-ascending":
        setSearchResult(lowestFirst(searchResult));
        break;
      case "price-descending":
        setSearchResult(highestFirst(searchResult));
        break;
      default:
        break;
    }
  };

  const handleSearch = (event) => {
    const results = products.filter((product) => {
      if (event.target.value.length > -1) {
        return (
          product.style
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          product.item
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          product.brand
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          product.price
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          product.size
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          product.color.toLowerCase().includes(event.target.value.toLowerCase())
        );
      }
    });
    setSearchResult(results);
    setApplySort(true);
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout user={props.user}>
      <div className="products-container">
        <div className="filters">
          <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
          <Sort onSubmit={handleSubmit} handleSort={handleSort} />
        </div>
        {/* <div className="card-layout"> */}
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
        {/* </div> */}
      </div>
    </Layout>
  );
};

export default Products;
