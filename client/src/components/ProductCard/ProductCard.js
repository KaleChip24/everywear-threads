import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <Link className="card" to={`/products/${props._id}`}>
      <img
          className='product-detail-image'
          src={props.imgURL[0]}
          alt={props.name}
        />
      </Link>
    </div>
  );
};
export default ProductCard;
