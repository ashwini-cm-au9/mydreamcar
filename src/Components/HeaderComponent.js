import React from 'react';
import { Link } from 'react-router-dom';
import LoginComponent from './LoginComponent';
const HeaderComponent = () =>{
    return(
        <React.Fragment>
             {/* <!-- ***** Preloader Start ***** --> */}
            <div id="js-preloader" className="js-preloader">
            <div className="preloader-inner">
                <span className="dot"></span>
                <div className="dots">
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
            </div>
            {/* <!-- ***** Preloader End ***** --> */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <Link to="/" className="logo">My<em> Dream </em> Car </Link>
                                <ul className="nav">
                                    <li><Link to="/" className="active">Home</Link></li>
                                    <li><Link to="/cars">All Cars</Link></li>
                                    <li><Link className="dropdown-item" to="/show">All Showrooms</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <LoginComponent/>
                                </ul>        
                                <Link className='menu-trigger'>
                                    <span>Menu</span>
                                </Link>
                                
                            </nav>
                        </div>
                    </div>
                </div>

            </header>
        </React.Fragment>
    )
}
export default HeaderComponent;