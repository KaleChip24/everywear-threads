import Layout from "../../components/Layout/Layout";
import "./Home.css";
import ProductCards from "../../components/ProductCards/ProductCards";
import { Link } from "react-router-dom";
import ImgCarousel from "../../components/ImgCarousel/ImgCarousel";

const Home = (props) => {

  return (
    <Layout user={props.user}>
      <ImgCarousel />
      <div className="landing-page">
        <div className="blerb">
          <p>Fashion marketplace app centered around inclusivity and community. Buy, Sell, and discover preloved threads for everyone. <strong>Everywear</strong>.</p>
        </div>
        <div className="home-btn">
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
