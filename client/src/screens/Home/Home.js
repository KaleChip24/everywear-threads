import Layout from "../../components/Layout/Layout";
import "./Home.css";
import ProductCards from "../../components/ProductCards/ProductCards";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <img src="https://i.ibb.co/6n5WQRz/NewStyle.png" alt="new style"></img>
      <img src="https://i.ibb.co/9cgZVrW/New-Arrival.png" alt="new arrival"></img>
      <img src="https://i.ibb.co/Ytfk965/New-Season.png" alt="new season"></img>
      <div className="home">
        <Link to={`/products`}>
          <button>Shop Now</button>
        </Link>
        <ProductCards />
      </div>
    </Layout>
  );
};

export default Home;
