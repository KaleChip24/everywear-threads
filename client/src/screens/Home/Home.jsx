import Layout from "../../components/Layout/Layout";
import "./Home.css";
import ProductCards from "../../components/ProductCards/ProductCards";
import { Link } from "react-router-dom";
import ImgCarousel from "../../components/ImgCarousel/ImgCarousel";
import Footer from '../../components/Footer/Footer';

const Home = (props) => {
	return (
		<>
			<div id='home'>
				<Layout user={props.user}>
					<ImgCarousel />
					<div className='landing-page'>
						<div className='blerb'>
							<p className='landing-blerb'>
								Fashion marketplace app centered around
								inclusivity and community. Buy, Sell, and
								discover preloved threads for everyone.{' '}
								<strong>Everywear</strong>.
							</p>
						</div>
						<div>
							<Link to={`/products`}>
								<button id='shop-now'>Shop Now</button>
							</Link>
							<ProductCards />
						</div>
					</div>
				</Layout>
			</div>
		</>
	);
};

export default Home;
