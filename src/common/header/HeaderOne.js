import React, {useState} from 'react';
import NavMenu from './NavMenu';
import Sidebar from './sidebar';
import Link from 'next/link';

const HeaderOne = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <header className="main-header clearfix">
                <div className="main-header__top clearfix">
                    <div className="container clearfix">
                        <div className="main-header__top-inner clearfix">
                            <div className="main-header__top-left">
                                <ul className="list-unstyled main-header__top-address">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-telephone"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="tel:5204654544">+5204654544</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-envelope"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="mailto:demo@example.com">demo@example.com</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location"></span>
                                        </div>
                                        <div className="text">
                                            <p>24/21, 2nd Rangpur, Sapla</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-header__top-right">
                                <div className="main-header__top-right-social">
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu clearfix">
                    <div className="container clearfix">
                        <div className="main-menu-wrapper clearfix">
                            <div className="main-menu-wrapper__left">
                                <div className="main-menu-wrapper__logo">
                                    <Link href="/"><img src="/assets/images/icon/logo.jpeg" style={{height:"80px"}} alt="" /></Link>
                                </div>
                            </div>
                            <div className="main-menu-wrapper__right">
                                <div className="main-menu-wrapper__main-menu">
                                    <a onClick={() => setIsActive(true)} className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                    <NavMenu />
                                </div>
                                <Link href="/contact" className="thm-btn main-header__btn">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <Sidebar isActive={isActive} setIsActive={setIsActive} />

            <div className="body-overlay"></div>
        </>
    )
}

export default HeaderOne;