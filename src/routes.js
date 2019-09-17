import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductPage/ProductPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AddProductPage from './pages/AddProductPage/AddProductPage';



const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage/>
    },
    {
        path : '/products',
        exact : false,
        main : () => <ProductListPage/>
    },
    {
        path : '/add-product',
        exact : false,
        main : () => <AddProductPage/>
    },
    {
        path : '/product/:id/edit',
        exact : false,
        main : ({match, history}) => <AddProductPage match={match} history={history}/>
    },
    {
        path : '/about',
        exact : false,
        main : () => <AboutPage/>
    },
    {
        path : '/contact',
        exact : false,
        main : () => <ContactPage/>
    },
    {
        path: '',
        exact: false,
        main : () => <NotFoundPage/>
    }


];

export default routes;