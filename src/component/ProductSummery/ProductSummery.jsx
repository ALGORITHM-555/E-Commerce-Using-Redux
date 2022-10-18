import React from 'react'
import BestSeller from './BestSeller';
import NewArrival from './NewArrival';
import TopRated from './TopRated';



const ProductSummery = () => {
    return (
        <div>
            <section className="home-product-list section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 custom-responsive-margin">                           
                            <BestSeller></BestSeller>                            
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 custom-responsive-margin">                       
                            <NewArrival></NewArrival>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <TopRated></TopRated>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductSummery
