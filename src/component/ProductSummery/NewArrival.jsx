import React from 'react'

const NewArrival = () => {
    return (
        <div>
            <h4 className="list-title">New Arrivals</h4>

            <div className="single-list">
                <div className="list-image">
                    <a href="product-grids.html"><img src="images/home-product-list/04.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                    <h3>
                        <a href="product-grids.html">iPhone X 256 GB Space Gray</a>
                    </h3>
                    <span>$1150.00</span>
                </div>
            </div>


            <div className="single-list">
                <div className="list-image">
                    <a href="product-grids.html"><img src="images/home-product-list/05.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                    <h3>
                        <a href="product-grids.html">Canon EOS M50 Mirrorless Camera</a>
                    </h3>
                    <span>$950.00</span>
                </div>
            </div>


            <div className="single-list">
                <div className="list-image">
                    <a href="product-grids.html"><img src="images/home-product-list/06.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                    <h3>
                        <a href="product-grids.html">Microsoft Xbox One S</a>
                    </h3>
                    <span>$298.00</span>
                </div>
            </div>
        </div>
    )
}

export default NewArrival
