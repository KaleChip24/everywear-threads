import Layout from "../../components/Layout/Layout";
import "./Home.css";
import ProductCards from "../../components/ProductCards/ProductCards";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="laning-page">
        <img className="landing-img" src="https://i.ibb.co/6n5WQRz/NewStyle.png" alt="new style"></img>
        <img className="landing-img" src="https://i.ibb.co/9cgZVrW/New-Arrival.png" alt="new arrival"></img>
        <img className="landing-img" src="https://i.ibb.co/Ytfk965/New-Season.png" alt="new season"></img>
        <p>Fashion marketpalce app centered around inclusivity and commpunity. But. Sell. Discover preloved threads for everyone, Everwear.</p>
        <div className="home">
          <Link to={`/products`}>
            <button>Shop Now</button>
          </Link>
          <ProductCards />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
