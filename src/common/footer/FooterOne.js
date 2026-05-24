import React from 'react';
import Link from 'next/link';

const FooterOne = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="site-footer__top">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__about-logo">
                                        <Link href="/"><img src="/assets/images/icon/logo.jpeg" style={{height:"80px"}}  alt="" /></Link>
                                    </div>
                                    <p className="footer-widget__about-text">The agile philosophy in lot of the process of
                                        analyzing, plannin, and implementing strategies level.plannin
                                        designing, and implementing</p>
                                    <div className="footer-widget__social">
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-google-plus"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__column footer-widget__links clearfix">
                                    <h3 className="footer-widget__title">Usefull Links</h3>
                                    <ul className="footer-widget__links-list list-unstyled clearfix">
                                        <li><Link href="/about">About us</Link></li>
                                        <li><Link href="/blog-grid">News & articles</Link></li>
                                        <li><Link href="/team">Our Teams</Link></li>
                                        <li><Link href="/about">Terms & Conditions</Link></li>
                                        <li><Link href="/about">Privacy Policy</Link></li>
                                        <li><Link href="/contact">Contact us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__blog clearfix">
                                    <h3 className="footer-widget__title">Blog post</h3>
                                    <ul className="footer-widget__blog-list list-unstyled clearfix">
                                        <li>
                                            <div className="footer-widget__blog-img">
                                                <img src="/assets/images/blog/footer-widget-blog-img-1.jpg" alt="" />
                                                <Link href="/blog-details"><i className="icon-link"></i></Link>
                                            </div>
                                            <div className="footer-widget__blog-content">
                                                <p className="footer-widget__blog-text">
                                                    <Link href="/blog-details">Business Conference Of Access To Blog.</Link>
                                                </p>
                                                <p className="footer-widget__blog-date"> 10 -Agu- 2021</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-widget__blog-img">
                                                <img src="/assets/images/blog/footer-widget-blog-img-2.jpg" alt="" />
                                                <Link href="/blog-details"><i className="icon-link"></i></Link>
                                            </div>
                                            <div className="footer-widget__blog-content">
                                                <p className="footer-widget__blog-text"><Link href="/blog-details">The
                                                        Revolutionise Your Workspace Blog.</Link></p>
                                                <p className="footer-widget__blog-date"> 20 -Agu- 2021</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__map clearfix">
                                    <h3 className="footer-widget__title">Our Maps</h3>
                                    <div className="footer-widget__map-box">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                            className="footer-widget-map__one" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer__bottom">
                        <p className="site-footer__bottom-text">© 2021 Copyright by <a href="https://themeforest.net/user/unicktheme">unicktheme</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterOne;