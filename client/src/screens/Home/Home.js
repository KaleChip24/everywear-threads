import Layout from "../../components/Layout/Layout";
import "./Home.css";
import ProductCards from "../../components/ProductCards/ProductCards";
import { Link } from "react-router-dom";
import ImgCarousel from "../../components/ImgCarousel/ImgCarousel";

const Home = (props) => {

  return (
    <Layout user={props.user}>
      <ImgCarousel />
      <div className="laning-page">
        {/* <img className="landing-img" src="https://i.ibb.co/6n5WQRz/NewStyle.png" alt="new style"></img>
        <img className="landing-img" src="https://i.ibb.co/9cgZVrW/New-Arrival.png" alt="new arrival"></img>
        <img className="landing-img" src="https://i.ibb.co/Ytfk965/New-Season.png" alt="new season"></img> */}
        <p>Fashion marketplace app centered around inclusivity and community. Buy, Sell, and discover preloved threads for everyone. <strong>Everywear</strong>.</p>
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
