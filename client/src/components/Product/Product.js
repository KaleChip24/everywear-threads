import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="product">
      <Link className="card" to={`/products/${props._id}`}>
        <img
          className='product-detail-image'
          src={props.imgURL[0]}
          alt={props.name}
        />
        <div className="price">{`$${props.price}`}</div>
      </Link>
    </div>
  );
};

export default Product;
