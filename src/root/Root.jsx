import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Root = () => {
    const location = useLocation();
    const thisPath = location.pathname;
    return (
        <div>
            {thisPath !== '/login' && thisPath !== '/register' &&
                <Header></Header>
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;