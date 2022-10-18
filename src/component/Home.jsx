import React from 'react';

import Banner from './Banner/Banner';
import PreLoader from './PreLoader';
import FeatureCategory from './FeatureCategory/FeatureCategory';
import TrendingProducts from './TrendingProducts/TrendingProducts';
import MainTwoProduct from './MainTwoProducts/MainTwoProduct';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import ProductSummery from './ProductSummery/ProductSummery';
import Brand from './Brands/Brand';
import LatestNews from './LatestNews/LatestNews';
import Service from './Services/Service';




const Home = () =>{
    return(
    <>        
        <PreLoader></PreLoader>
        <Banner></Banner>
        <FeatureCategory></FeatureCategory>          
        <TrendingProducts></TrendingProducts>  
        <MainTwoProduct></MainTwoProduct>
        <SpecialOffer></SpecialOffer>
        <ProductSummery></ProductSummery>
        <Brand></Brand>
        <LatestNews></LatestNews>
        <Service></Service>
    </>
    )
}

export default Home;