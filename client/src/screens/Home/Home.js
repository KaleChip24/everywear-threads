import { useState, useEffect } from 'react';
import Layout from './Layout';

export const Home = () => {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
        const allProducts = await getProducts();
        setProducts(allProducts);
    }
    fetchProducts();
}, []);

    return (
        <div className='Home'>
            <Layout>
                <div className='productBox'>
                    {apiResponse.map((p.))}
                </div>
            </Layout>
        </div>
    )
};
