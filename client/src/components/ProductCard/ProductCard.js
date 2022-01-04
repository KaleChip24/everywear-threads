import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <Link className="card" to={`/products/${props._id}`}>
      {props.imgURL.map((image) => {
          return (
            <img className="product-image" src={image} alt={props.item}></img>
          );
        })}
        <div>View</div>
      </Link>
    </div>
  );
};
export default ProductCard;
