import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      <Link className="product" to={`/products/${props._id}`}>
        {props.imgURL.map((image) => {
          return (
            <img className="product-image" src={image} alt={props.name}></img>
          );
        })}
        <div className="product-name">{props.name}</div>
        <div className="price">{`$${props.price}`}</div>
      </Link>
    </>
  );
};

export default Product;
