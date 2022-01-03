import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div>
      <Link className="product" to={`/products/${props._id}`}>
        <img className="product-image" src={props.imgURL} alt={props.name} />
        <div className="product-name">{props.name}</div>
        <div className="price">{`$${props.price}`}</div>
      </Link>
    </div>
  );
};

export default Product;
