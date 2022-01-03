import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div>
      <Link className="product" to={`/products/${props._id}`}>
        <div className="productImage">
          {props.imgURL.map((image) => {
            return <img src={image} alt={props.name}></img>;
          })}
        </div>
        <div className="product-name">{props.name}</div>
        <div className="price">{`$${props.price}`}</div>
      </Link>
    </div>
  );
};

export default Product;
