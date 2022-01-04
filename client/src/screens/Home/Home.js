import Layout from "../../components/Layout/Layout";
import "./Home.css";
import ProductCards from "../../components/ProductCards/ProductCards";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="home">
        <ProductCards />
      </div>
    </Layout>
  );
};

export default Home;
