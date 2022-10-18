import React from 'react'

const TopRated = () => {
    return (
        <div>
            <h4 className="list-title">Top Rated</h4>

            <div className="single-list">
                <div className="list-image">
                    <a href="product-grids.html"><img src="images/home-product-list/07.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                    <h3>
                        <a href="product-grids.html">Samsung Gear 360 VR Camera</a>
                    </h3>
                    <span>$68.00</span>
                </div>
            </div>


            <div className="single-list">
                <div className="list-image">
                    <a href="product-grids.html"><img src="images/home-product-list/08.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                    <h3>
                        <a href="product-grids.html">Samsung Galaxy S9+ 64 GB</a>
                    </h3>
                    <span>$840.00</span>
                </div>
            </div>


            <div className="single-list">
                <div className="list-image">
                    <a href="product-grids.html"><img src="images/home-product-list/09.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                    <h3>
                        <a href="product-grids.html">Zeus Bluetooth Headphones</a>
                    </h3>
                    <span>$28.00</span>
                </div>
            </div>
        </div>
    )
}

export default TopRated
