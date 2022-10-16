import React from 'react'

const LatestNews = () => {
    return (
        <>
            <section className="blog-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Our Latest News</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-blog">
                                <div className="blog-img">
                                    <a href="blog-single-sidebar.html">
                                        <img src="images/blog/blog-1.jpg" alt="#" />
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <a className="category" href="#">eCommerce</a>
                                    <h4>
                                        <a href="blog-single-sidebar.html">What information is needed for shipping?</a>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                    </p>
                                    <div className="button">
                                        <a href="#" className="btn">Read More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-blog">
                                <div className="blog-img">
                                    <a href="blog-single-sidebar.html">
                                        <img src="images/blog/blog-2.jpg" alt="#" />
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <a className="category" href="#">Gaming</a>
                                    <h4>
                                        <a href="blog-single-sidebar.html">Interesting fact about gaming consoles</a>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                    </p>
                                    <div className="button">
                                        <a href="#" className="btn">Read More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-blog">
                                <div className="blog-img">
                                    <a href="blog-single-sidebar.html">
                                        <img src="images/blog/blog-3.jpg" alt="#" />
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <a className="category" href="#">Electronic</a>
                                    <h4>
                                        <a href="blog-single-sidebar.html">Electronics, instrumentation & control engineering
                                        </a>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                    </p>
                                    <div className="button">
                                        <a href="#" className="btn">Read More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestNews