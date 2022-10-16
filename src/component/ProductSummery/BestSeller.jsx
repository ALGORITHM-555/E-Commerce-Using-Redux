import React from 'react'

const BestSeller = () => {
    return (
        <div>
         <h4 className="list-title">Best Sellers</h4>
            <div className="single-list">
                <div className="list-image">
                    <a href="product-grids.html"><img src="images/home-product-list/01.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                    <h3>
                        <a href="product-grids.html">GoPro Hero4 Silver</a>
                    </h3>
                    <span>$287.99</span>
                </div>
            </div>


            <div className="single-list">
                <div className="list-image">
                    <a href="product-grids.html"><img src="images/home-product-list/02.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                    <h3>
                        <a href="product-grids.html">Puro Sound Labs BT2200</a>
                    </h3>
                    <span>$95.00</span>
                </div>
            </div>


            <div className="single-list">
                <div className="list-image">
                    <a href="product-grids.html"><img src="images/home-product-list/03.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                    <h3>
                        <a href="product-grids.html">HP OfficeJet Pro 8710</a>
                    </h3>
                    <span>$120.00</span>
                </div>
            </div>
        </div>
    )
}

export default BestSeller
