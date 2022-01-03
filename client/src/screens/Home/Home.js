import { useState, useEffect } from 'react';
import Layout from './Layout';
import './Home.css'

export const Home = () => {
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
