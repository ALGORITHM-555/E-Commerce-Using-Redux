import {React,useEffect} from 'react'
import { useSelector , shallowEqual,useDispatch } from 'react-redux'
import {FetchFeatureProducts} from '../../Redux/action/action';
import axios from 'axios';
const FeatureCategory = () => {
    const product = useSelector((state) => state.featureProducts, shallowEqual);    
    const dispatch = useDispatch();

    const Products = async() =>{
        await axios.get('https://fakestoreapi.com/products/category/electronics').then((response)=>{                            
           dispatch(FetchFeatureProducts(response.data));               
        }).catch((err)=>{            
            console.log(err);            
        })
    } 
    useEffect(() => {
        Products();
    }, []);
    // console.count('counter')
    console.log(product.Product);
    
    return (
        <div>
            <section className="featured-categories section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Featured Categories</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">   
                        {(product.Product).map((items)=>(                                
                            <div className="col-lg-4 col-md-6 col-12">

                                <div className="single-category">
                                    <h3 className="heading">TV & Audios</h3>
                                    <ul>
                                        <li><a href="product-grids.html">Smart Television</a></li>
                                        <li><a href="product-grids.html">QLED TV</a></li>
                                        <li><a href="product-grids.html">Audios</a></li>
                                        <li><a href="product-grids.html">Headphones</a></li>
                                        <li><a href="product-grids.html">View All</a></li>
                                    </ul>
                                    <div className="images">
                                        {/* <img src="images/featured-categories/fetured-item-1.png" alt="#" /> */}
                                        <img src={items.image} alt="#" />
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-category">
                                <h3 className="heading">Desktop & Laptop</h3>
                                <ul>
                                    <li><a href="product-grids.html">Smart Television</a></li>
                                    <li><a href="product-grids.html">QLED TV</a></li>
                                    <li><a href="product-grids.html">Audios</a></li>
                                    <li><a href="product-grids.html">Headphones</a></li>
                                    <li><a href="product-grids.html">View All</a></li>
                                </ul>
                                <div className="images">
                                    <img src="images/featured-categories/fetured-item-2.png" alt="#" />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-category">
                                <h3 className="heading">Cctv Camera</h3>
                                <ul>
                                    <li><a href="product-grids.html">Smart Television</a></li>
                                    <li><a href="product-grids.html">QLED TV</a></li>
                                    <li><a href="product-grids.html">Audios</a></li>
                                    <li><a href="product-grids.html">Headphones</a></li>
                                    <li><a href="product-grids.html">View All</a></li>
                                </ul>
                                <div className="images">
                                    <img src="../images/featured-categories/fetured-item-3.png" alt="#" />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-category">
                                <h3 className="heading">Dslr Camera</h3>
                                <ul>
                                    <li><a href="product-grids.html">Smart Television</a></li>
                                    <li><a href="product-grids.html">QLED TV</a></li>
                                    <li><a href="product-grids.html">Audios</a></li>
                                    <li><a href="product-grids.html">Headphones</a></li>
                                    <li><a href="product-grids.html">View All</a></li>
                                </ul>
                                <div className="images">
                                    <img src="images/featured-categories/fetured-item-4.png" alt="#" />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-category">
                                <h3 className="heading">Smart Phones</h3>
                                <ul>
                                    <li><a href="product-grids.html">Smart Television</a></li>
                                    <li><a href="product-grids.html">QLED TV</a></li>
                                    <li><a href="product-grids.html">Audios</a></li>
                                    <li><a href="product-grids.html">Headphones</a></li>
                                    <li><a href="product-grids.html">View All</a></li>
                                </ul>
                                <div className="images">
                                    <img src="images/featured-categories/fetured-item-5.png" alt="#" />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-category">
                                <h3 className="heading">Game Console</h3>
                                <ul>
                                    <li><a href="product-grids.html">Smart Television</a></li>
                                    <li><a href="product-grids.html">QLED TV</a></li>
                                    <li><a href="product-grids.html">Audios</a></li>
                                    <li><a href="product-grids.html">Headphones</a></li>
                                    <li><a href="product-grids.html">View All</a></li>
                                </ul>
                                <div className="images">
                                    <img src="images/featured-categories/fetured-item-6.png" alt="#" />
                                </div>
                            </div>

                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeatureCategory
