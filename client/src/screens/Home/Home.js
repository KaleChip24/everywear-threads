import Layout from "./Layout";
import "./Home.css";
import ProductCards from "../../components/ProductCards/ProductCards";

export const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="home">
        <ProductCards />
      </div>
    </Layout>
  );
};
