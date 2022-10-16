import React from 'react'
// import SingleProductDetail from './SingleProductDetail';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Outlet } from 'react-router-dom';

const Shop = () => {
  return (
    <>
        <Breadcrumb />
        {/* <SingleProductDetail /> */}
        <Outlet />
    </>
  )
}

export default Shop